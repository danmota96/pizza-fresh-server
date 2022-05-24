import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl } from "class-validator";

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Pizza de Mussarela',
  })
  
  name: string;
  @ApiProperty({
    description: 'Descrição do produto',
    example: "Queijo mussarela, massa de ervas finas",
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 15.35,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do produto',
    example: 'https://i.imgur.com/hNE75Iw.png',
  })

  image: string;

}
