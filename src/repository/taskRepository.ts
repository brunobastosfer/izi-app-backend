import { Injectable } from '@nestjs/common';
import { Tasks } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { TaskDto } from 'src/task/dto/dto';

@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTask(data: TaskDto): Promise<Tasks> {
    return await this.prisma.tasks.create({
      data,
    });
  }

  async removeTask(id: string): Promise<Tasks> {
    return await this.prisma.tasks.delete({
      where: {
        id,
      },
    });
  }

  async getTask(id: string): Promise<Tasks> {
    return await this.prisma.tasks.findUnique({
      where: {
        id,
      },
    });
  }

  async getTasksByUserId(id: string): Promise<Tasks[]> {
    return await this.prisma.tasks.findMany({
      where: {
        userId: id,
      },
    });
  }

  async updateTask(id: string, data: TaskDto): Promise<Tasks> {
    return await this.prisma.tasks.update({
      where: {
        id,
      },
      data,
    });
  }
}
