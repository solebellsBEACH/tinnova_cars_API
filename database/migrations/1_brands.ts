import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Brands extends BaseSchema {
  protected tableName = 'brands'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.string('name').unique().notNullable()
      table.string('image').unique().notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
