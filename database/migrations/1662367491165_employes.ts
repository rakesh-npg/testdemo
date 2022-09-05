import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'employes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('table_id')
      table.string("employee_phone")
      table.string("employee_name")
      table.integer("employee_rollno")
    })
  }
   


public async down () {
  this.schema.dropTable(this.tableName)
}
}
