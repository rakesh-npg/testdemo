import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Employee from 'App/Models/Employe'
import EmpValidator from 'App/Validators/EmployeeValidator'


export default class EmployesController {
    public async create({request}:HttpContextContract){
        
        const payload = await request.validate(EmpValidator)
        const emp = new Employee() 
        emp.employee_phone = payload.employee_phone
        emp.employee_name = payload.employee_name 
        emp.employee_rollno = payload.employee_rollno 
        await emp.save() 
        return Employee.all() 
    }
    public async read({request}:HttpContextContract){
        return Employee.all() 
    }

    public async read_id({request}:HttpContextContract){
        //console.log('test')
        
        //console.log(request.params().id)
        return Employee.findByOrFail("table_id", request.params().id)
        .catch(() => 'Cannot find data')
    
    }

    public async update({request}:HttpContextContract){
        //const payload 
        const payload = await request.validate(EmpValidator)
        const emp = await Employee.findByOrFail("employee_rollno", payload.employee_rollno)
        emp.employee_phone= payload.employee_phone
        emp.employee_name = payload.employee_name
        await emp.save() 

    }

    public async del({request}:HttpContextContract){
        const empid = request.params().id 
        console.log(empid)
        const emp = await Employee.findByOrFail("employee_rollno", request.params().id)
        await emp.delete() 
        return Employee.all() 
    }

    public async getDept({request}:HttpContextContract){
        return await Database
        .from('employes')
        .join('employe_departments', 'employes.table_id', 'employe_departments.table_id')
        .select('employes.employee_name')
        .select('employe_departments.dept')
        .select('employes.employee_phone')
        .select('employes.table_id')
        .where('employes.table_id', request.params().id)

    }

    public async getEmps({request}:HttpContextContract){
        const department =  request.input('employee_dept')
        //console.log(department)
        return await Database
        .from('employe_departments')
        .join('employee', 'employee.table_id', 'employe_departments.table_id')
        .orderBy('employe_departments.dept')
        .select('employee.employee_name')
        .select('employee.employee_phone')
        .select('employe_departments.employee_dept')
        .where('employe_departments.employee_dept' ,'like', department)
    }

    public async getSearch({request}:HttpContextContract){

        let val = 'James'
        return await Database.from('employes').select('*').
        where((query)=>{
            query
            .where('table_id', val)
            .orWhere('table_id', val)
            .orWhere('employee_name', val)
        }
 
    }

    public async createMany(){
        const usre = await Employee.createMany([
            {
                employee_name :  "James", 
                employee_rollno: 1, 
                employee_phone : "9999999999"
            }, 
            {
                employee_name :  "Bond", 
                employee_rollno: 2, 
                employee_phone : "9999999999"
            }, 
            {
                employee_name :  "Sherlock", 
                employee_rollno: 3, 
                employee_phone : "9999999999"
            }, 
            {
                employee_name :  "Holms", 
                employee_rollno: 4, 
                employee_phone : "9999999999"
            }, 
            {
                employee_name :  "Hardy", 
                employee_rollno: 5, 
                employee_phone : "9999999999"
            }, 
            {
                employee_name :  "Jerico", 
                employee_rollno: 6, 
                employee_phone : "9999999999"
            }, 
        ])
        return Employee.all() 
    }


}

