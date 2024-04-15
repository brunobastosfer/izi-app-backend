import { Injectable } from '@nestjs/common';
import { TaskRepository } from 'src/repository/taskRepository';
import { TaskDto } from './dto/dto';
import { Tasks } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async createTask(data: TaskDto): Promise<Tasks> {
    return await this.taskRepository.createTask(data);
  }

  async removeTask(id: string): Promise<Tasks> {
    return await this.taskRepository.removeTask(id);
  }

  async getTask(id: string): Promise<Tasks> {
    return await this.taskRepository.getTask(id);
  }

  async getTasksByUserId(id: string): Promise<Tasks[]> {
    return await this.taskRepository.getTasksByUserId(id);
  }

  async updateTask(id: string, data: TaskDto): Promise<Tasks> {
    return await this.taskRepository.updateTask(id, data);
  }
}
