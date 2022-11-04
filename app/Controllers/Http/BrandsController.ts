// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Brand from "App/Models/Brand";
import BrandValidator from "App/Validators/BrandValidator";

export default class BrandsController {
    async create({ request, response }) {
        const payload = await request.validate(BrandValidator)
        try {
          const brand = await Brand.create(payload);
          return brand;
        } catch (error) {
          console.log(error);
          response
            .status(404)
            .send({ message: "Não foi possível criar o a marca!" + error });
        }
    }
}
