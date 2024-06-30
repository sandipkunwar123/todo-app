import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
interface TodoItemProps {
  completed: boolean;
  id: string;
  title: string;
  description: string;
  toggleCompleted: (id: string) => void;
  removeTodo: (id: string) => void;
}

export default function TodoItem(props: TodoItemProps) {
  const { completed, toggleCompleted, id, title, description, removeTodo } =
    props;
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        value={completed ? "true" : "false"}
        onChange={() => toggleCompleted(id)}
      />
      <Link to={`todo/${id}`}>{title}</Link>

      <p>{description}</p>
      <Button onClick={() => removeTodo(id)}>Delete</Button>
    </li>
  );
}
