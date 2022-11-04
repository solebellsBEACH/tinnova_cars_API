// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";
import UserValidator from "App/Validators/UserValidator";

export default class UsersController {
    async create({ request, response }) {
        const payload = await request.validate(UserValidator)
        console.log(payload)
        try {
          const user = await User.create(payload);
          return user;
        } catch (error) {
          console.log(error);
          response
            .status(404)
            .send({ message: "Não foi possível criar o usuário!" + error });
        }
    }
}
