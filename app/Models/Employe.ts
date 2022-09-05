import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Employe extends BaseModel {
  @column({ isPrimary: true })
  public table_id: number


  @column()
  public employee_phone: string 

  @column() 
  public employee_name: string

  @column() 
  public employee_rollno: number  
}