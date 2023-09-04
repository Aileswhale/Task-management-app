import  { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTask = () => {
    if (taskName && dueDate) {
      setTasks([...tasks, { name: taskName, dueDate }]);
      setTaskName('');
      setDueDate('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

return (
<>  
     <nav> <h1> Task Manager</h1> </nav>
    <div className='mainDiv' >
      <div className='container'>
        <input
          type="text"
          placeholder="What would you like to do ?"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
       <div className='notask'> <button onClick={addTask}>Add Task</button> </div>
      </div>
      {tasks.length === 0 ? (
        <div className='notask' ><p>No tasks yet.</p></div>
      ) : (
        <ul className='container addtask'>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.name} <br /> (Due: {task.dueDate})
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
</>
  );
}

export default TaskManager;
