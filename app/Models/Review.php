<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;



class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'description',
        'points',
    ];

    public function users() {
        return $this->belongsTo(User::class);
    }
}
