import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty({
    description: 'Nome da tarefa',
    example: 'Comprar pão',
  })
  name: string;
  @ApiProperty({
    description: 'ID do usuário que criou a tarefa',
  })
  userId: string;
}
