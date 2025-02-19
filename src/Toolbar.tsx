import React, { useState } from "react";

interface ToolbarProps {
  onAddTask: (name: string, estimation: number) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskEstimation, setTaskEstimation] = useState(0);

  const handleAddTask = () => {
    onAddTask(taskName, taskEstimation);
  };

  return (
    <div>
      <input
        onChange={(e) => setTaskName(e.target.value)}
        type="text"
        placeholder="task name..."
        value={taskName}
      />
      <input
        onChange={(e) => setTaskEstimation(Number(e.target.value))}
        type="number"
        placeholder="task estimation..."
        value={taskEstimation}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default Toolbar;
