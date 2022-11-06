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
        year: 1990,
        description: 'This is the Mustang Mach-1 description !!',
      },
      {
        name: 'Maverick',
        image: 'https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/maverick/colorizer/preto-asturias/fbr-maverick-2022-colorizer-preto-asturias.jpg.dam.full.high.jpg/1644877512336.jpg',
        brand_id: 1,
        color: 'black',
        is_sold: true,
        year: 1992,
        description: 'This is the Maverick description !!',
      },
      {
        name: 'Bronco Sport',
        image: 'https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2022/bronco-sport/colorizer/vermelho-aurora/fbr-bronco-colorizer-vermelho-aurora.jpg.dam.full.high.jpg/1650896826955.jpg',
        brand_id: 1,
        color: 'red',
        is_sold: true,
        year: 1993,
        description: 'This is the Bronco Sport description !!',
      },
      {
        name: 'S10 CABINE DUPLA',
        image: 'https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/S10_Cabina_Dupla/images/colorizer/s10-cabine-dupla-preto-ouro-negro-3-4-frente.png',
        brand_id: 6,
        color: 'black',
        is_sold: true,
        year: 2000,
        description: 'This is the S10 CABINE DUPLA description !!',
      },
      {
        name: 'S10 CABINE Simples',
        image: 'https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/S10_Cabina_Simple/images/colorizer/chevrolet-brasil_s10_cabine_simples_frente_frente_prata_switchblade.png',
        brand_id: 6,
        color: 'gray',
        is_sold: true,
        year: 2008,
        description: 'This is the S10 CABINE Simples description !!',
      },
      {
        name: 'S10 Z71',
        image: 'https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/colorizer-s10z71/images/colorizer/s10-z71-azul-34frente.png',
        brand_id: 6,
        color: 'blue',
        is_sold: true,
        year: 2009,
        description: 'This is the S10 Z71 description !!',
      },
      {
        name: 'Argo 1.0',
        image: 'https://argo.fiat.com.br/assets/images/img-version-argo-10.png',
        brand_id: 2,
        color: 'white',
        is_sold: true,
        year: 2003,
        description: 'This is the Argo 1.0 description !!',
      },
      {
        name: 'Pulse',
        image: 'https://pulse.fiat.com.br/images/Versions/version-impetus@3x.png',
        brand_id: 2,
        color: 'gray',
        is_sold: true,
        year: 2013,
        description: 'This is the Pulse description !!',
      },
      {
        name: 'Toro',
        image: 'https://toro.fiat.com.br/static/media/toroUltra.b1cfdef4.png',
        brand_id: 2,
        color: 'red',
        is_sold: true,
        year: 2010,
        description: 'This is the Toro description !!',
      },
      {
        name: 'Frontier',
        image: 'https://s2.glbimg.com/SoUFdoqrdsbXbH83tCZ1__9EcsU=/0x0:1280x720/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/Q/U/oKDKdmSQWdBcvfBn8QRw/maxresdefault.jpg',
        brand_id: 3,
        color: 'red',
        is_sold: false,
        year: 2015,
        description: 'This is the Frontier description !!',
      },
      {
        name: 'Kicks',
        image: 'https://www.nissan-cdn.net/content/dam/Nissan/br/site/veiculos/novo-kicks-my23/SenseCVT-K23-PrataClassic1.png',
        brand_id: 3,
        color: 'white',
        is_sold: false,
        year: 2023,
        description: 'This is the Kicks description !!',
      },
      {
        name: 'Versa',
        image: 'https://www.nissan-cdn.net/content/dam/Nissan/br/20201026/NovoVersa_Motorista_900x506px.jpg.ximg.l_12_m.smart.jpg',
        brand_id: 3,
        color: 'red',
        is_sold: false,
        year: 2020,
        description: 'This is the Versa description !!',
      },
      {
        name: 'Rav 4',
        image: 'https://www.toyota.com.br/wp-content/themes/toyota/ciclo-toyota/carros/rav4_HYBRID_SX_1D6_carPage.png',
        brand_id: 5,
        color: 'gray',
        is_sold: false,
        year: 2029,
        description: 'This is the Rav 4 description !!',
      },
      {
        name: 'Corolla',
        image: 'https://www.toyota.com.br/wp-content/themes/toyota/ciclo-toyota/carros/corolla_gli_040_carPage.png',
        brand_id: 5,
        color: 'white',
        is_sold: false,
        year: 2025,
        description: 'This is the Corolla description !!',
      },
      {
        name: 'Corolla Cross',
        image: 'https://www.toyota.com.br/wp-content/themes/toyota/ciclo-toyota/carros/corolla-cross_xr_040_carPage.png',
        brand_id: 5,
        color: 'white',
        is_sold: false,
        year: 1981,
        description: 'This is the Corolla Cross description !!',
      },
    ])
  }
}
