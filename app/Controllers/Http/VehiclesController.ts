import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vehicle from "App/Models/Vehicle";
import VehicleValidator from "App/Validators/VehicleValidator";
import { DateTime } from 'luxon';
import { schema } from '@ioc:Adonis/Core/Validator'
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
  async listAll({ response }) {
    try {
      const vehicles = await Vehicle.all()
      response.status(200).send({ message: 'Veículos encontrados com sucesso', count: vehicles.length, vehicles })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível encontrar os veículos!" + error });
    }
  }

  async listById({ response, params }: HttpContextContract & { params: { id: string } }) {
    const { id } = params
    try {
      const vehicles = await Vehicle.query().where('id', id)
      response.status(200).send({ message: 'Veículos encontrados com sucesso', count: vehicles.length,vehicles })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível encontrar os veículo!" + error });
    }
  }

  async listByDecade({ response, params }: HttpContextContract & { params: { year: string } }) {
    const  year  = parseInt(params.year)
    try {
      const vehicles = await Vehicle.query().whereBetween('year', [year, year+10])
      response.status(200).send({ message: 'Veículos encontrados com sucesso', count: vehicles.length,vehicles })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível encontrar os veículo!" + error });
    }
  }

  async list({ request, response }: HttpContextContract) {
    try {
      const vehicles = await Vehicle.query().where(request.qs())
      response.status(200).send({ message: 'Veículos encontrados com sucesso', count: vehicles.length,vehicles })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível encontrar os Veículos!" + error });
    }
  }
  async delete({ response, params }: HttpContextContract & { params: { id: string } }) {
    const { id } = params
    try {
      const vehicle = await Vehicle.findOrFail(id)
      vehicle.delete()
      response.status(200).send({ message: 'Veículo deletado com sucesso', vehicle })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível deletar o veículo!" + error });
    }
  }
  async put({ request, response, params }: HttpContextContract & { params: { id: string } }) {
    const { id } = params
    const payload = await request.validate(VehicleValidator)
    try {
      await Vehicle
        .query()
        .where('id', id)
        .update({ ...payload, updatedAt: DateTime.local() })

      const vehicle = await Vehicle
        .query()
        .where('id', id)
      response.status(200).send({ message: 'Veículo atualizado com sucesso', vehicle })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível atualizar o veículo!" + error });
    }
  }
  async patch({ request, response, params }: HttpContextContract & { params: { id: string } }) {
    const { id } = params

    const vehiclePatchSchema = schema.create({
      name: schema.string.nullableAndOptional({ trim: true }),
      brand_id: schema.number.nullableAndOptional(),
      image: schema.string.nullableAndOptional({ trim: true }),
      description: schema.string.nullableAndOptional(),
      color: schema.string.nullableAndOptional(),
      year: schema.number.nullableAndOptional(),
      is_sold: schema.boolean.nullableAndOptional(),
    })
    const payload = await request.validate({ schema: vehiclePatchSchema })
    try {
      await Vehicle
        .query()
        .where('id', id)
        .update({ ...payload, updatedAt: DateTime.local() })

      const vehicle = await Vehicle
        .query()
        .where('id', id)
      response.status(200).send({ message: 'Veículo atualizado com sucesso', vehicle })
    } catch (error) {
      console.log(error);
      response
        .status(404)
        .send({ message: "Não foi possível atualizar o veículo!" + error });
    }
  }
}
