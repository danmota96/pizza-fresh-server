import { Body, Controller, Get, Param, Patch, Post} from "@nestjs/common";
import { CreateTableDto } from "./dto/create-table.dto";
import { TableService } from "./table.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Table } from "./entities/table.entity";
import { UpdateTableDto } from "./dto/update-table.dto";


@ApiTags('table')
@Controller('table')
export class TableController {

  constructor(private tableService: TableService){}

  @Get()
  @ApiOperation({
    summary: 'Listar todas as mesas'
  })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Vizualizar uma mesa'
  })
  findOne(@Param('id') id:string): Promise<Table>{
    return this.tableService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar uma mesa'
  })
  create(@Body() dto: CreateTableDto): Promise<Table>{
    return this.tableService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar/atualizar uma mesa pelo ID',
  })
  update(@Param('id') id: string, @Body () dto: UpdateTableDto): Promise<Table> {
    return this.tableService.update(id, dto);
  }

}


