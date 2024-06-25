import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
function TodoItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.completed}
        value={props.completed}
        onChange={() => props.toggleCompleted(props.id)}
      />
      <Link to={`todo/${props.text}`}>{props.text}</Link>

      <p>{props.description}</p>
      <Button onClick={() => props.removeTodo(props.id)}>Delete</Button>
    </li>
  );
}
export default TodoItem;
