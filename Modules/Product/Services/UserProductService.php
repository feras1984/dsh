<?php

namespace Modules\Product\Services;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductFavorite;
use Modules\Product\Entities\ProductLike;
use Modules\Product\Entities\ProductRating;
use Modules\Product\Entities\ProductReview;
use Modules\User\Facades\UserService\UserService;

class UserProductService
{
    public function mapLikeModel(ProductLike $like) {
        return [
            'id' => $like->id,
            'productId' => $like->product_id,
            'userId' => $like->user_id,
            'like' => (bool)$like->like,
        ];
    }

    public function mapFavoriteModel(ProductFavorite $favorite) {
        return [
            'id' => $favorite->id,
            'productId' => $favorite->product_id,
            'userId' => $favorite->user_id,
            'favorite' => (bool)$favorite->favorite,
        ];
    }

    public function mapReviewModel(ProductReview $review) {
        $userInfo = UserService::mapUserShort($review->user()->first());

        $reviewModel = [
            'id' => $review->id,
            'productId' => $review->product_id,
            'userId' => $review->user_id,

            'review' => $review->review,
            'isActive' => (bool) $review->is_active,
            'createdAt' => Carbon::make($review->updated_at)->format('M d, Y'),
        ];

        return [...$reviewModel, ...$userInfo];
    }

    public function mapRateModel(ProductRating $rating) {
        return [
            'id' => $rating->id,
            'productId' => $rating->product_id,
            'userId' => $rating->user_id,
            'rate' => $rating->rate,
        ];
    }



    public function getLikes($likes) {
        $likesModel = [];
        foreach ($likes as $like) {
            $likesModel[] = $this->mapLikeModel($like);
        }

        return $likesModel;
    }

    public function getFavorites($favorites) {
        $favoritesModel = [];
        foreach ($favorites as $favorite) {
            $favoritesModel[] = $this->mapFavoriteModel($favorite);
        }

        return $favoritesModel;
    }

    public function getReviews($reviews) {
        $reviewsModel = [];
        foreach ($reviews as $review) {
            $reviewsModel[] = $this->mapReviewModel($review);
        }

        return $reviewsModel;
    }

    public function getRatings($ratings) {
        $ratingsModel = [];
        foreach ($ratings as $rate) {
            $ratingsModel[] = $this->mapRateModel($rate);
        }

        return $ratingsModel;
    }

    public function getLikedProducts($userId) {
        return Product::with([
            'likes' => fn($query) =>
            $query
                ->where('user_id', $userId)
        ])->whereHas('likes', function ($query) use ($userId) {
            $query
                ->where('user_id', $userId)
                ->where('like', 1);
        })->get();
    }

    public function getFavoriteProducts($userId) {
        return Product::with([
            'favorites' => fn($query) =>
            $query
                ->where('user_id', $userId)
        ])->whereHas('favorites', function ($query) use ($userId) {
            $query
                ->where('user_id', $userId)
                ->where('favorite', 1);
        })->get();
    }

    public function getRatingsProducts($userId) {
        return Product::with([
            'ratings' => fn($query) =>
            $query
                ->where('user_id', $userId)
            ])
            ->whereHas('ratings', function ($query) use ($userId) {
            $query
                ->where('user_id', $userId);
        })->get();
    }

    public function getReviewsProducts($userId) {
        return Product::with([
            'reviews' => fn($query) =>
            $query
                ->where('user_id', $userId)
        ])
            ->whereHas('reviews', function ($query) use ($userId) {
                $query
                    ->where('user_id', $userId);
            })->get();
    }

    public function activateReview(int $reviewId, string $status): ?array
    {
        $review = ProductReview::query()
            ->where('id', $reviewId)
            ->first();
        if ($review) {
            $review->is_active = $status == "true" ? 1 : 0;
            $review->update();
            return $this->mapReviewModel($review);
        } else return null;

    }

    public function getAllLikes() {
        return ProductLike::query()->where('like', 1)->count();
    }

    public function getAllFavorites() {
        return ProductFavorite::query()->where('favorite', 1)->count();
    }

    public function getAllRatings() {
        return ProductRating::query()->count();
    }

    public function getAllReviews() {
        return ProductReview::query()->count();
    }

}
