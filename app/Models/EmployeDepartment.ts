import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EmployeDepartment extends BaseModel {
  @column({ isPrimary: true })
  public table_id: number

  @column() 
  public employee_rollno: number 
  
  @column() 
  public employee_dept: string
}
