import { PartialType } from "@nestjs/swagger";
import { CreateTableDto } from "./create-table.dto";


/* PartialType tem a função de deixar toda a estrutura do objeto como opcional */
export class UpdateTableDto extends PartialType(CreateTableDto){}
