import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Post()
    create(@Body('title') title: string): Promise<Task> {
        return this.tasksService.createTask(title);
    }

    @Get()
    async findAll(): Promise<Task[]> {
        return this.tasksService.getTasks();
    }


    @Post(':id/complete')
    complete(@Param('id') id: number): Promise<Task> {
        return this.tasksService.updateTaskStatus(id, true);
    }

    @Post(':id/incomplete')
    incomplete(@Param('id') id: number): Promise<Task> {
        return this.tasksService.updateTaskStatus(id, false);
    }
}