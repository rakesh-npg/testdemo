import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dept from 'App/Models/EmployeDepartment'
import DeptValidator from 'App/Validators/EmployeDepartmentValidator'


export default class EmployeDepartmentsController {
    public async create({request}:HttpContextContract){
        
        const payload = await request.validate(DeptValidator)
        const dept = new Dept() 
        dept.employee_rollno = payload.employee_rollno
        dept.employee_dept = payload.employee_dept 
        await dept.save() 
        return Dept.all() 
    }
    public async read({request}:HttpContextContract){
        return Dept.all() 
    }

    public async read_id({request}:HttpContextContract){
        console.log('test')
        console.log(request.routeParams.id)
        return Dept.findByOrFail("rollno", request.routeParams.id)
    }

    public async update({request}:HttpContextContract){
        //const payload 
        const payload = await request.validate(DeptValidator)
        const dept = await Dept.findByOrFail("employee_rollno", payload.employee_rollno)
        dept.employee_rollno = payload.employee_rollno
        dept.employee_dept = payload.employee_dept 
        await dept.save() 
        return Dept.all() 

    }

    public async del({request}:HttpContextContract){
        const empid = request.routeParams.id 
        console.log(empid)
        const dept = await Dept.findByOrFail("employee_rollno", request.routeParams.id)
        await dept.delete() 
        return Dept.all() 
    }

    public async createMany(){
        const usre = await Dept.createMany([
            {
                employee_rollno: 1, 
                employee_dept: 'HR'
            }, 
            {
                employee_rollno: 2, 
                employee_dept: 'HR'
            }, 
            {
                employee_rollno: 3, 
                employee_dept: 'Dev'
            }, 
            {
                employee_rollno: 4, 
                employee_dept: 'Intern'
            }, 
            {
                employee_rollno: 5, 
                employee_dept: 'Dev'
            }, 
            {
                employee_rollno: 6, 
                employee_dept: 'Intern'
            }, 
        ])
        return Dept.all() 
    }

}

