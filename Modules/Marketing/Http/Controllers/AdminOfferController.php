<?php

namespace Modules\Marketing\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Modules\Marketing\Entities\Offer;
use Modules\Marketing\Facades\Offer\OfferService;
use Symfony\Component\HttpFoundation\Response;

class AdminOfferController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Inertia\Response
     */
    public function index(): \Inertia\Response
    {
//        return view('marketing::index');
        $offers = OfferService::getOffers();
        $count = OfferService::getOffersCount();
        return Inertia::render('Admin/Marketing/Offer/OfferContainer', [
            'offers' => $offers,
            'count' => $count,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Marketing/Offer/Partials/OfferAdd/OfferAdd');
//        return view('marketing::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $data = $request->all();
            return response()->json(OfferService::storeOffer($data));
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while storing offer!',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('marketing::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return \Inertia\Response
     */
    public function edit(Offer $offer)
    {
//        return view('marketing::edit');
        return Inertia::render('Admin/Marketing/Offer/Partials/OfferUpdate/OfferUpdate', [
            'offer' => OfferService::mapOfferModel($offer),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(Request $request, Offer $offer)
    {
        try {
            $data = $request->all();
            return response()->json(OfferService::updateOffer($data, $offer));
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while updating offer!',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function activate(Request $request, Offer $offer)
    {
        try {
            $data = $request->all();
            return response()->json(OfferService::activateOffer($data, $offer));
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while updating offer!',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(Offer $offer)
    {
        try {
            OfferService::deleteOffer($offer);
            return response()->json([
                'status' => 'success',
                'message' => 'Offer has been deleted!',
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while deleting offer!',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
