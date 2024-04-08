import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { PrismaService } from 'prisma/prisma.service';
import { TaskRepository } from 'src/repository/taskRepository';
import { AuthService } from 'src/user/auth.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService, PrismaService, AuthService, TaskRepository],
})
export class TaskModule {}
