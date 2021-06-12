<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesPermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles_permissions')->insert([
            'permission_id' => '1',
            'role_id' => '1',
        ]);

        DB::table('roles_permissions')->insert([
            'permission_id' => '2',
            'role_id' => '2',
        ]);

        DB::table('roles_permissions')->insert([
            'permission_id' => '2',
            'role_id' => '3',
        ]);
        DB::table('roles_permissions')->insert([
            'permission_id' => '1',
            'role_id' => '4',
        ]);
        DB::table('roles_permissions')->insert([
            'permission_id' => '1',
            'role_id' => '3',
        ]);
        DB::table('roles_permissions')->insert([
            'permission_id' => '1',
            'role_id' => '5',
        ]);
    }
}
