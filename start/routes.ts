/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { test } from '@japa/runner'
import appkeyauth from 'App/Middleware/Auth'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('/create', 'EmployesController.create')
  Route.put('/update', 'EmployesController.update')
  Route.delete('/delete/:id', 'EmployesController.del')
  Route.get('/read', 'EmployesController.read')
  Route.get('/read/:id', 'EmployesController.read_id')

  
}).prefix('/emp')

Route.get('/read', 'EmployesController.read')
Route.get('/many', 'EmployesController.createMany')

Route.group(() => {
  Route.post('/create', 'EmployeDepartmentsController.create')
  Route.put('/update', 'EmployeDepartmentsController.update')
  Route.delete('/delete/:id', 'EmployeDepartmentsController.del')
  Route.get('/read', 'EmployeDepartmentsController.read')
  Route.get('/read/:id', 'EmployeDepartmentsController.read_id')
  
}).prefix('/dept')

Route.get('/getDept/:id', 'EmployesController.getDept')

Route.post('/getEmps', 'EmployesController.getEmps')

Route.get('/search', 'EmployesController.getSearch')