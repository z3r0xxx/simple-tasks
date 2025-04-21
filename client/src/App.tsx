import { useState, useEffect } from 'react';
import axios from 'axios';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './styles/main.scss';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get<Task[]>('http://localhost:3000/tasks');
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  const handleTaskAdded = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskCompleted = (taskId: number, completed: boolean) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: completed } : task
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Task List</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} onTaskCompleted={handleTaskCompleted} />
    </div>
  );
};

export default App;
