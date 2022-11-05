// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
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
    // try {
    //   const brand = await Brand.findOrFail(id)
    //   brand.delete()
    //   response.status(200).send({ message: 'Marca deletada com sucesso', brand })
    // } catch (error) {
    //   console.log(error);
    //   response
    //     .status(404)
    //     .send({ message: "Não foi possível deletar o a marca!" + error });
    // }
  }
}
