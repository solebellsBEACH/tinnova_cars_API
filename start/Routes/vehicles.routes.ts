import Route from '@ioc:Adonis/Core/Route'

//Vehicles  Routes
Route.get("vehicleListAll", "VehiclesController.listAll")
Route.get("vehicle", "VehiclesController.list")
Route.get("vehicleById/:id", "VehiclesController.listById")
Route.get("vehicleByDecade/:year", "VehiclesController.listByDecade")

//Rotas Privadas
Route.group(() => {
    //Vehicles Private Routes
    Route.post("vehicle", "VehiclesController.create")
    Route.delete("vehicle/:id", "VehiclesController.delete")
    Route.put("vehicle/:id", "VehiclesController.put")
    Route.patch("vehicle/:id", "VehiclesController.patch")
}).middleware('auth')