import React from "react";
import { TaskType } from "./types";

interface TaskListProps {
  tasks: TaskType[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      <h3>Task List</h3>
      <ul className="task-list">
        <li>
          <div>ID</div>
          <div>Task name</div>
          <div>Estimation</div>
        </li>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>{task.id}</div>
            <div>{task.name}</div>
            <div>{task.estimation}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
