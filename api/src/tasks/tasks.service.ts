import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) { }

    createTask(title: string): Promise<Task> {
        const task = this.tasksRepository.create({ title });
        return this.tasksRepository.save(task);
    }

    getTasks(): Promise<Task[]> {
        return this.tasksRepository.find();
    }

    async updateTaskStatus(id: number, completed: boolean): Promise<Task> {
        const task = await this.tasksRepository.findOne({
            where: { id }, 
        });

        if (task) {
            task.completed = completed;
            return this.tasksRepository.save(task);
        }

        // @ts-ignore
        return null;  
    }
}