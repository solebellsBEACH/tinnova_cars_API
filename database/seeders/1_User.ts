import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        username:'Neymar JR',
        email:'emailNeymar@gmail.com',
        password:'passwordNeymar'
        
      },
      {
        username:'Pedro',
        email:'emailPedro@gmail.com',
        password:'passwordPedro'
        
      },
      {
        username:'Lucas',
        email:'emailLucas@gmail.com',
        password:'passwordLucas'
        
      }
    ])
  }
}
