import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Vehicle extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({})
  public name: string

  @column()
  public brand_id: number

  @column()
  public image: string

  @column()
  public description: string

  @column()
  public color: string

  @column()
  public year: number

  @column()
  public is_sold: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
