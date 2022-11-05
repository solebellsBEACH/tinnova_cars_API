import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
import UserValidator from "App/Validators/UserValidator";
import { DateTime } from 'luxon';
import { schema } from '@ioc:Adonis/Core/Validator'
export default class UsersController {
  async create({ request, response }) {
    const payload = await request.validate(UserValidator)
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
  async delete({ response, params }: HttpContextContract & { params: { id: string } }) {
    const { id } = params
    try {
      const user = await User.findOrFail(id)
      user.delete()
      response.status(200).send({ message: 'Usuário deletado com sucesso', user })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível deletar o usuário!" + error });
    }
  }
  async put({ request, response, params }: HttpContextContract & { params: { id: string } }) {
    const { id } = params
    const payload = await request.validate(UserValidator)
    try {
      await User
        .query()
        .where('id', id)
        .update({ ...payload, updatedAt: DateTime.local() })

      const user = await User
        .query()
        .where('id', id)
      response.status(200).send({ message: 'Usuário atualizado com sucesso', user })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível atualizar o usuário!" + error });
    }
  }
  async patch({ request, response, params }: HttpContextContract & { params: { id: string } }) {
    const { id } = params

    const userPatchSchema = schema.create({
      name: schema.string.nullableAndOptional(),
      image: schema.string.nullableAndOptional(),
    })
    const payload = await request.validate({ schema: userPatchSchema })
    try {
      await User
        .query()
        .where('id', id)
        .update({ ...payload, updatedAt: DateTime.local() })

      const user = await User
        .query()
        .where('id', id)
      response.status(200).send({ message: 'Usuário atualizado com sucesso', user })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível atualizar o usuário!" + error });
    }
  }
}
