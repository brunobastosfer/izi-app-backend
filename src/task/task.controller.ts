import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiOperation } from '@nestjs/swagger';
import { TaskDto } from './dto/dto';
import { JwtAuthGuard } from 'src/user/jwt-auth.guard';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma tarefa.' })
  @UseGuards(JwtAuthGuard)
  async createTask(@Body() data: TaskDto) {
    return await this.taskService.createTask(data);
  }
}
