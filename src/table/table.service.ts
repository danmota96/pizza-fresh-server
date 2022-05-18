import { Injectable } from "@nestjs/common";
import { CreateTableDto } from "./dto/create-table.dto";

@Injectable()
export class TableService{
  tables =[];

  findAll() {
    return 'Buscar todas as mesas';
  }
  create(createTableDto: CreateTableDto) {
    return 'Criar uma mesa:' + JSON.stringify(createTableDto);
  }
}
