import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Brand from 'App/Models/Brand'

export default class BrandSeeder extends BaseSeeder {
  public async run() {
    await Brand.createMany([
      {
        id: 1,
        name: 'Ford',
        image: 'https://cdn.worldvectorlogo.com/logos/ford-8.svg'
      },
      {
        id: 2,
        name: 'Fiat',
        image: 'https://cdn.worldvectorlogo.com/logos/fiat-3.svg'
      },
      {
        id: 3,
        name: 'Nissan',
        image: 'https://cdn.worldvectorlogo.com/logos/nissan-6.svg'
      },
      {
        id: 4,
        name: 'Lamborghini',
        image: 'https://cdn.worldvectorlogo.com/logos/lamborghini.svg'
      },
      {
        id: 5,
        name: 'Toyota',
        image: 'https://cdn.worldvectorlogo.com/logos/toyota.svg'
      },
      {
        id: 6,
        name: 'Chevrolet',
        image: 'https://cdn.worldvectorlogo.com/logos/chevrolet-1.svg'
      },
    ])
  }
}
