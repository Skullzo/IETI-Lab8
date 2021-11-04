import { useHistory } from "react-router";

export const TaskItem = ({ id, isChecked, taskName, onTaskChange }) => {
  const history = useHistory();

  const styleOfTheComponent = {
    textDecoration: isChecked ? "line-through" : "",
  };

  const handleClick = () => {
    const url = `/tasks/${id}`;
    history.push(url);
  };

  return (
    <li>
      <input onChange={onTaskChange} checked={isChecked} type="checkbox" />
      <span style={styleOfTheComponent}>{taskName}</span>
      <button onClick={handleClick}>Edit</button>
    </li>
  );
};