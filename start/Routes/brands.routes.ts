import Route from '@ioc:Adonis/Core/Route'

//Brand  Routes
Route.get("brandListAll", "BrandsController.listAll")
Route.get("brand", "BrandsController.list")
//Rotas Privadas
Route.group(() => {
    //Brand Private Routes
    Route.post("brand", "BrandsController.create")
    Route.delete("brand/:id", "BrandsController.delete")
    Route.put("brand/:id", "BrandsController.put")
    Route.patch("brand/:id", "BrandsController.patch")
}).middleware('auth')