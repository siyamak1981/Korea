<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\HasPermissions;


class Role extends Model
{

    use HasPermissions;

    public function users()
    {
        return $this->belongsToMany(User::class, 'users_roles');
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'roles_permissions');
    }

    public function hasPermissionTo(...$permissions)
    {
        return $this->permissions()->whereIn('slug', $permissions)->count();
    }

    public function scopeDeveloper($quesry)
    {
        return $quesry->where('slug', 'developer');
    }

    public function scopeAdmin($quesry)
    {
        return $quesry->where('slug', 'admin');
    }


    public function scopeSuperAdmin($quesry)
    {
        return $quesry->where('slug', 'superadmin');
    }


    public function scopePublisher($quesry)
    {
        return $quesry->where('slug', 'publisher');
    }

    public function scopeEditor($quesry)
    {
        return $quesry->where('slug', 'editor');
    }
}
