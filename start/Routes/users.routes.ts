import Route from '@ioc:Adonis/Core/Route'

Route.post("session", "SessionsController.store")
Route.post("user", "UsersController.create")