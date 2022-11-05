import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Vehicle from 'App/Models/Vehicle'

export default class VehicleSeeder extends BaseSeeder {
  public async run() {
    await Vehicle.createMany([
      {
        name: 'Mustang Mach-1',
        image: 'https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2022/mustang-mach-1/color/colorizer/azul-estoril/fbr-mustang-mach-1-azul-estoril.jpg.dam.full.high.jpg/1649165910531.jpg',
        brand_id: 1,
        color: 'blue',
        is_sold: true,
        year: 2022,
        description: 'This is the Mustang Mach-1 description !!',
      },
      {
        name: 'Maverick',
        image: 'https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/maverick/colorizer/preto-asturias/fbr-maverick-2022-colorizer-preto-asturias.jpg.dam.full.high.jpg/1644877512336.jpg',
        brand_id: 1,
        color: 'black',
        is_sold: false,
        year: 2020,
        description: 'This is the Maverick description !!',
      },
      {
        name: 'Bronco Sport',
        image: 'https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2022/bronco-sport/colorizer/vermelho-aurora/fbr-bronco-colorizer-vermelho-aurora.jpg.dam.full.high.jpg/1650896826955.jpg',
        brand_id: 1,
        color: 'red',
        is_sold: false,
        year: 2012,
        description: 'This is the Bronco Sport description !!',
      }

    ])
  }
}
