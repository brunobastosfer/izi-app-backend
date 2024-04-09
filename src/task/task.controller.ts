import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
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

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove uma tarefa pelo ID.' })
  @UseGuards(JwtAuthGuard)
  async removeTask(@Param('id') id: string) {
    return await this.taskService.removeTask(id);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Busca uma tarefa pelo ID.' })
  @UseGuards(JwtAuthGuard)
  async getTask(@Param('id') id: string) {
    return await this.taskService.getTask(id);
  }

  @Get('/user/:id')
  @ApiOperation({ summary: 'Busca todas as tarefas de um usuário.' })
  @UseGuards(JwtAuthGuard)
  async getTasksByUserId(@Param('id') id: string) {
    return await this.taskService.getTasksByUserId(id);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Atualiza uma tarefa pelo ID.' })
  @UseGuards(JwtAuthGuard)
  async updateTask(@Param('id') id: string, @Body() data: TaskDto) {
    return await this.taskService.updateTask(id, data);
  }
}
