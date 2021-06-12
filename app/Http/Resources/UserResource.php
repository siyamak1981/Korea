<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $userRoles = $this->roles()->with('permissions')->get();
        $roles = $userRoles->pluck('slug');
        $rolePermissions = $userRoles->pluck('permissions')->flatten(1)->pluck('slug');
        $userPermissions = $rolePermissions->merge($this->permissions->pluck('slug'));
        return [
            'name' => $this->name,
            'email' => $this->email,
            'created_at' => $this->created_at->format("Y_m_d"),
            'roles' => $roles,
            'permissions' => $userPermissions
        ];
    }
}
