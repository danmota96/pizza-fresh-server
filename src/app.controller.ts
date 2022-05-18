import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

//Swagger
@ApiTags('status')
/* CONTROLAR A ROTA DE TODOS OS ENDPOINTS */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /* CONTROLAR UMA ROTA INDIVIDUALMENTE */
  @Get()
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }
}
