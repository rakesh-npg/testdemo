import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { appKey } from 'Config/app'

export default class Apicheck {
  public async handle({request}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    console.log(request.header('appkey'))
    if(appKey !=  request.header('appkey')){
      response.status(404).send('error')
    }
    await next()
  }
}
