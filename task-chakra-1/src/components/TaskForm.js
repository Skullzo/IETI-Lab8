import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useData } from "../providers/DataProvider";

export const TaskForm = () => {
  const history = useHistory();
  const { data, setData } = useData();
  const { taskId } = useParams();
  const task = data.tasks.find((task) => task.id === taskId);

  const [text, setText] = useState(task?.name ?? "");

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleChange = (e) => {
    const inputName = e.target.value;

    setText(inputName);
  };

  const handleSave = () => {
    const newTasks = data.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: text };
      }

      return task;
    });

    setData((prev) => ({ ...prev, tasks: newTasks }));

    history.goBack();
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Task Name"
        value={text}
        onChange={handleChange}
      />
      <input type="checkbox" checked={task.isCompleted} />

      <button type="button" onClick={handleSave}>
        Save
      </button>
    </form>
  );
};