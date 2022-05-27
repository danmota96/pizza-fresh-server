import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsUUID } from "class-validator";

export class CreateOrderDto {
  @ApiProperty({
    description: 'ID do usuário que está criando o pedido',
    example: '46265bab-6680-483d-b902-ff825dc070d3',
  })
  userId: String;

  @IsPositive()
  @IsInt()
  @ApiProperty({
    description: 'Número da mesa que está realizando o pedido',
    example: 1,
  })
  tableNumber: number;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com os IDs dos produtos que estão no pedido',
    example: '["40ebad8e-e8b3-4840-8549-cb4120fd84d9","71b03451-3e8a-466c-9d00-799fdf660938"]',
  })
  products: string[];
}
