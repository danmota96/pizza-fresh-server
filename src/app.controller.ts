import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


/* CONTROLAR A ROTA DE TODOS OS ENDPOINTS */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /* CONTROLAR UMA ROTA INDIVIDUALMENTE */
  @Get('')
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }
}
