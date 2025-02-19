import { useState } from "react";
import Toolbar from "./Toolbar";
import TaskList from "./List";
import { TaskType } from "./types";
import "./styles.css";

const initialTaskList: TaskType[] = [
  {
    name: "Review ne PRs.",
    estimation: 8,
    id: new Date().getTime(),
  },
  {
    name: "Daily meeing.",
    estimation: 9,
    id: new Date().getTime() + 1,
  },
];

// Uncomment bellow line to start task 3
// const calculateTotalEstimation = (list: TaskType[]) => {
//   return list.reduce((sum, task) => sum + Number(task.estimation), 0);
// };

export default function App() {
  const [tasks, setTasks] = useState(initialTaskList);
  // Uncomment bellow line to start task 3
  // const [totalEstimation, setTotalEstimation] = useState(() => {
  //   return calculateTotalEstimation(tasks);
  // });

  const addTask = (taskName: string, taskEstimation: number) => {
    if (
      !taskName ||
      !taskEstimation ||
      tasks.find((task) => task.name === taskName)
    ) {
      alert("Please input valid Task!");
      return;
    }
    tasks.unshift({
      name: taskName,
      estimation: taskEstimation,
      id: new Date().getTime(),
    });
    setTasks(tasks);
    {
      /* Uncomment bellow line to start Task 3 */
    }
    // setTotalEstimation(calculateTotalEstimation(tasks));
  };

  return (
    <div className="App">
      <h1>Task Management</h1>
      {/* START TOOLBAR */}
      <Toolbar onAddTask={addTask} />
      {/* END TOOLBAR */}
      {/* START LIST */}
      <TaskList tasks={tasks} />
      {/* END LIST */}
      {/* Uncomment bellow line to start Task 3 */}
      {/* <h4 className="total-estimation">Total Estimation: {totalEstimation}</h4> */}
    </div>
  );
}
