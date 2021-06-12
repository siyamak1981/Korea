<?php

use Illuminate\Database\Seeder;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        \App\Models\Permission::insert([
       
        [
          'name' => 'View Developer Dashboard',
          'slug' => 'view-developer-dashboard',
        ],
        [
          'name' => 'View admin Dashboard',
          'slug' => 'view-admin-dashboard',
        ]
    ]);
      
    }
}
    