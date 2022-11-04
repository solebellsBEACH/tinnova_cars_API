// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vehicle from "App/Models/Vehicle";
import VehicleValidator from "App/Validators/VehicleValidator";

export default class VehiclesController {

    async create({ request, response }) {
        const payload = await request.validate(VehicleValidator)
        try {
          const vehicle = await Vehicle.create(payload);
          return vehicle;
        } catch (error) {
          console.log(error);
          response
            .status(404)
            .send({ message: "Não foi possível criar o veículo!" + error });
        }
    }
}
