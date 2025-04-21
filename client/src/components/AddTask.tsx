import { useState } from 'react';
import axios from 'axios';
import '../styles/AddTask.scss'

interface AddTaskProps {
    onTaskAdded: (task: { id: number; title: string; completed: boolean }) => void;
}

const AddTask = ({ onTaskAdded }: AddTaskProps) => {
    const [title, setTitle] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title) {
            const response = await axios.post('http://localhost:3000/tasks', { title });
            onTaskAdded(response.data);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New task"
                required
                className="p-2 border border-gray-300 rounded-lg w-full"
            />
            <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded-lg w-full">
                Add Task
            </button>
        </form>
    );
};

export default AddTask;
