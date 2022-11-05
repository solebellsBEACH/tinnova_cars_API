// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Brand from "App/Models/Brand";
import BrandValidator from "App/Validators/BrandValidator";
import { DateTime } from "luxon";
import { schema } from '@ioc:Adonis/Core/Validator'

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
  async listAll({ response }) {
    try {
      const brands = await Brand.all()
      response.status(200).send({ message: 'Marcas encontradas com sucesso', brands })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível encontrar o as marcas!" + error });
    }
  }

  async list({ response, params }) {
    response.send({ params: params })
    // try {
    //   const brands = await Brand.all()
    //   response.status(200).send({ message: 'Marcas encontradas com sucesso', brands })
    // } catch (error) {
    //   console.log(error);
    //   response
    //     .status(404)
    //     .send({ message: "Não foi possível encontrar o as marcas!" + error });
    // }
  }
  async delete({ response, params }: HttpContextContract & { params: { id: string } }) {
    const { id } = params
    try {
      const brand = await Brand.findOrFail(id)
      brand.delete()
      response.status(200).send({ message: 'Marca deletada com sucesso', brand })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível deletar o a marca!" + error });
    }
  }
  async put({ request, response, params }: HttpContextContract & { params: { id: string } }) {
    const { id } = params
    const payload = await request.validate(BrandValidator)
    try {
      await Brand
        .query()
        .where('id', id)
        .update({ ...payload, updatedAt: DateTime.local() })

      const brand = await Brand
        .query()
        .where('id', id)
      response.status(200).send({ message: 'Marca atualizada com sucesso', brand })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível atualizar o a marca!" + error });
    }
  }
  async patch({ request, response, params }: HttpContextContract & { params: { id: string } }) {
    const { id } = params

    const brandPatchSchema = schema.create({
      name: schema.string.nullableAndOptional(),
      image:schema.string.nullableAndOptional(),
    })
    const payload = await request.validate({ schema: brandPatchSchema })
    try {
      await Brand
        .query()
        .where('id', id)
        .update({ ...payload, updatedAt: DateTime.local() })

      const brand = await Brand
        .query()
        .where('id', id)
      response.status(200).send({ message: 'Marca atualizada com sucesso', brand })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível atualizar o a marca!" + error });
    }
  }
}
