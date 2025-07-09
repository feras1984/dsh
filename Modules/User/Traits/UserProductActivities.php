<?php

namespace Modules\User\Traits;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductFavorite;
use Modules\Product\Entities\ProductLike;
use Modules\Product\Entities\ProductRating;
use Modules\Product\Entities\ProductReview;
use Modules\User\Entities\User;

trait UserProductActivities
{
    public function likes(): HasMany
    {
        return $this->hasMany(ProductLike::class, 'user_id', 'id');
    }

    public function favorites(): HasMany
    {
        return $this->hasMany(ProductFavorite::class, 'user_id', 'id');
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(ProductReview::class, 'user_id', 'id');
    }

    public function rates(): HasMany
    {
        return $this->hasMany(ProductRating::class, 'user_id', 'id');
    }
}
