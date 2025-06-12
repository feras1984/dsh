<?php

namespace Modules\Marketing\Services\Offer;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pipeline\Pipeline;
use Modules\Category\Entities\Category;
use Modules\Category\Facades\CategoryService;
use Modules\Marketing\Entities\Offer;
use Modules\Marketing\Entities\ProductOffer;
use Modules\Marketing\Services\Filter\CountFilter;
use Modules\Marketing\Services\Filter\ReferenceFilter;
use Modules\Product\Entities\Product;
use Modules\Product\Facades\ProductService;

class OfferService
{
    public function mapOfferModel (Offer $offer) {
        $reference = $offer->reference()->first();
        $referenceModel = '';
        $type = 'common';
        $name = 'common';
        switch ($offer->reference_type) {
            case 'Modules\Product\Entities\Product':
                $type = 'product';
                $name = ProductService::getProductName($offer->reference_id);
                break;
            case 'Modules\Category\Entities\Category':
                $type = 'category';
                $name = CategoryService::getCategoryName($offer->reference_id);
                break;
            default:
//                $type = 'common';
//                $name = 'common';
                break;
        }
        return [
            'id' => $offer->id,
            'referenceId' => $offer->reference_id,
            'type' => $type,
            'name' => $name,
            'isPercent' => (bool)$offer->is_percent,
            'isActive' => (bool)$offer->is_active,
            'amount' => $offer->amount,
//            'startDate' => Carbon::make($offer->start_date)->format('M d, Y'),
//            'endDate' => Carbon::make($offer->end_date)->format('M d, Y'),
            'startDate' => $offer->start_date,
            'endDate' => $offer->end_date,
            'valid' => Carbon::parse($offer->end_date) > Carbon::now(),
        ];
    }

    public function getOffers () {
        $offers = Offer::query()->orderBy('updated_at', 'DESC')->get();
        $offersModel = [];
        foreach ($offers as $offer) {
            $offersModel[] = $this->mapOfferModel($offer);
        }
        return $offersModel;
    }

    public function getOffersCount () {
        return app(Pipeline::class)
            ->send(Offer::query())
            ->through([
                CountFilter::class,
            ])
            ->thenReturn();
    }

    public function getActiveOffers () {
        $offers = Offer::query()
            ->whereIsActive(1)
            ->where('start_date', '=<', Carbon::now())
            ->where('end_date', '>=', Carbon::now());
        $offersModel = [];
        foreach ($offers as $offer) {
            $offersModel[] = $this->mapOfferModel($offer);
        }
        return $offersModel;
    }

    public function getOfferByReference(int $productId) {
//        $offer = app(Pipeline::class)
//            ->send(Offer::query())
//            ->through([
//                ReferenceFilter::class . ":" . $productId . ',' . Product::class,
//                ReferenceFilter::class . ":" . $categoryId . ',' . Category::class,
//            ])
//            ->thenReturn()->get()->last();
//        if (is_null($offer)) return null;
//        else return $this->mapOfferModel($offer);
        $prodOffer = ProductOffer::query()
            ->where('product_id', $productId)
            ->where('validity', 'valid')
            ->where('is_active', 1)
            ->first();
        if (is_null($prodOffer)) return null;
        $offer = Offer::query()->where('id', $prodOffer->offer_id)->first();
        return $this->mapOfferModel($offer);
    }

    private function fillOfferForm(Offer &$offer, array $data) {

        $offer->fill([
            'reference_id' => $data['id'] > 0 ? $data['id'] : 1,
//            'reference_type' => $entity,
            'is_active' => array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1,
            'is_percent' => $data['isPercent'] === 'true',
            'amount' => $data['amount'],
            'start_date' => Carbon::make($data['startDate']),
            'end_date' => Carbon::make($data['endDate']),
        ]);
        if (array_key_exists('type', $data)) {
            if ($data['type'] === 'category') $entity = 'Modules\Category\Entities\Category';
            elseif ($data['type'] === 'product') $entity = 'Modules\Product\Entities\Product';
            else $entity = 'common';
            $offer['reference_type'] = $entity;
        }

//        if (array_key_exists('id', $data)) {
//            $offer['reference_id'] = $data['id'] > 0 ? $data['id'] : 1;
//        }
    }

    public function storeOffer(array $data) {
        $offer = new Offer();
        $this->fillOfferForm($offer, $data);
        $offer->save();
        return $this->mapOfferModel($offer);
    }

    public function updateOffer(array $data, Offer $offer) {
        $this->fillOfferForm($offer, $data);
        $offer->update();
        return $this->mapOfferModel($offer);
    }

    public function activateOffer(array $data, Offer $offer) {
        $offer->is_active = array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1;
        $offer->update();
        return $this->mapOfferModel($offer);
    }

    public function deleteOffer(Offer $offer) {
        $offer->delete();
    }
}
