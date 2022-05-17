import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


/* CONTROLAR A ROTA DE TODOS OS ENDPOINTS */
@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /* CONTROLAR UMA ROTA INDIVIDUALMENTE */
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
