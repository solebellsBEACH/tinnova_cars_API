import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vehicles extends BaseSchema {
  protected tableName = 'vehicles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').unique().notNullable()
      table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('CASCADE')
      table.string('image').unique().notNullable()
      table.integer('year').notNullable()
      table.boolean('is_sold').notNullable()
      table.string('description').notNullable()
      table.string('color').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
