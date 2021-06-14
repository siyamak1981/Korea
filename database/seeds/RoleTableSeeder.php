<?php

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::insert([
            [
                "name" => "Developer",
                "slug" => "developer"
            ],
            [
                "name" => "Publisher",
                "slug" => "publisher"
            ],
            [
                "name" => "Editor",
                "slug" => "editor"
            ],

            [
                'name' => 'SuperAdmin',
                "slug" => 'superadmin'
            ],
            [
                'name' => 'Admin',
                "slug" => 'admin'
            ]
        ]);
        $developerRole = App\Models\Role::developer()->firstOrFail();
        $developerPermissions = App\Models\Permission::whereIn('slug', ['view-developer-dashboard'])->get()
        ->pluck('id')->toArray();
        $developerRole->permissions()->attach($developerPermissions);
    }
}
