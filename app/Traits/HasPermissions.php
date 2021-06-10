<?php

namespace App\Traits;

use App\Models\Permission;

trait HasPermissions
{

    public function hasPermissionTo(...$permissions)
    {
        return $this->permissions()->whereIn('slug', $permissions)->count() ||
            $this->roles()->whereHas('permissions', function ($q) use ($permissions) {
                $q->whereIn('slug', $permissions);
            })->count();
    }

    private function getPermissionIdBySlug(...$permissions)
    {
        return Permission::whereIn('slug', $permissions)->get()->pluck('id')->toArray();
    }


    public function setPermissions(...$permissions)
    {
        $this->permissions()->sync($this->getPermissionIdBySlug($permissions));
    }


    public function givePermissionTo(...$permissions)
    {
        $this->permissions()->attach($this->getPermissionIdBySlug($permissions));
    }
    

    public function detachPermissions(...$permissions)
    {
        $this->permissions()->detach($this->getPermissionIdBySlug($permissions));
    }
}
