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
}
