import { Module } from "@nestjs/common";
import { TableController } from "./table.controller";
import { TableService } from "./table.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [TableController],
  providers: [TableService],
  imports: [PrismaModule]

})
export class TableModule {}
