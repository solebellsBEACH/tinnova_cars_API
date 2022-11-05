/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Rotas Abertas
Route.post("session", "SessionsController.store")
Route.post("user", "UsersController.create")

//Vehicles  Routes
Route.get("vehicle", "VehiclesController.listAll")
//Brand  Routes
Route.get("brand", "BrandsController.listAll")
Route.get("brandList/*", "BrandsController.list")
//Rotas Privadas
Route.group(() => {
    //Vehicles Private Routes
    Route.post("vehicle", "VehiclesController.create")
    Route.delete("vehicle/:id", "VehiclesController.delete")
    Route.put("vehicle/:id", "VehiclesController.put")
    Route.patch("vehicle/:id", "VehiclesController.patch")
    //Brand Private Routes
    Route.post("brand", "BrandsController.create")
    Route.delete("brand/:id", "BrandsController.delete")
    Route.put("brand/:id", "BrandsController.put")
    Route.patch("brand/:id", "BrandsController.patch")
}).middleware('auth')