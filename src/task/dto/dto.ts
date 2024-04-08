import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty({
    description: 'Nome da tarefa',
    example: 'Comprar pão',
  })
  name: string;
  @ApiProperty({
    description: 'Descrição da tarefa',
    example: 'Lembrar de comprar pão da marca X',
  })
  description: string;
  @ApiProperty({
    description: 'ID do usuário que criou a tarefa',
  })
  userId: string;
}
