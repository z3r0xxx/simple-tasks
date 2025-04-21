import axios from 'axios';
import { useState } from 'react';
import '../styles/TaskList.scss';
import { RotatingLines } from 'react-loader-spinner';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onTaskCompleted: (taskId: number, completed: boolean) => void;
}

const TaskList = ({ tasks, onTaskCompleted }: TaskListProps) => {
    const [loadingTasks, setLoadingTasks] = useState<{ [key: number]: boolean }>({});

    const handleCheckboxChange = async (taskId: number, completed: boolean) => {
        setLoadingTasks((prev) => ({ ...prev, [taskId]: true }));

        try {
            await axios.post(`http://localhost:3000/tasks/${taskId}/${completed ? 'incomplete' : 'complete'}`);
            onTaskCompleted(taskId, !completed);
        } catch (error) {
            console.error('Error updating task', error);
        } finally {
            setLoadingTasks((prev) => ({ ...prev, [taskId]: false }));
        }
    };

    return (
        <ul className="space-y-3">
            {tasks.map((task) => (
                <li key={task.id} className="flex items-center">
                    {loadingTasks[task.id] ? (
                        <RotatingLines width="16" strokeColor="gray" strokeWidth="4" />
                    ) : (
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleCheckboxChange(task.id, task.completed)}
                            className="h-5 w-5 mr-3"
                        />
                    )}
                    <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.title}</span>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
