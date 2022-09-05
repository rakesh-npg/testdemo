import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'employe_departments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('table_id')
      table.integer('employee_rollno')
      table.string('employee_dept')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
