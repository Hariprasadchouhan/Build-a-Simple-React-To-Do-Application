import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const deleteTask = (index) => {
    dispatch({ type: "DELETE_TASK", payload: index });
  };

  const editTask = (index, newTask) => {
    dispatch({ type: "EDIT_TASK", payload: { index, newTask } });
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => deleteTask(index)}>Delete</button>
          <button onClick={() => editTask(index, prompt("Edit Task:", task))}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
