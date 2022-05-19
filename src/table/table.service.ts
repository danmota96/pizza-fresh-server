import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTableDto } from "./dto/create-table.dto";
import { UpdateTableDto } from "./dto/update-table.dto";
import { Table } from "./entities/table.entity";

@Injectable()
export class TableService{

  tables: Table[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  findOne(id: string): Promise<Table> {
    return this.prisma.table.findUnique({ where: { id }});
  }

  create(dto: CreateTableDto): Promise<Table> {
    const table: Table = {...dto};

    return this.prisma.table.create({
      data: table,
    });
  }

  update(id: string, dto: UpdateTableDto): Promise<Table> {
    const data: Partial<Table> = {...dto};

    return this.prisma.table.update({
      where: {id},
      data,
    })
  }
}
