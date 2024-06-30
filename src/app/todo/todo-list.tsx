import TodoItem from "./todo-item";
import { ITodoItem } from "./todo";

// function TodoList(){
//     return(
//         <ul>
//             <TodoItem text="Go to office" description="please reach before"/>
//             <TodoItem text="Drink water" description="Every 4hr"/>
//             <TodoItem text="Complete task" description="Complete assignment"/>
//         </ul>
//     )
// }
interface TodoList {
  todoList: ITodoItem[];
  removeTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
}

export default function TodoList(props: TodoList) {
  const { todoList, toggleCompleted, removeTodo } = props;
  if (todoList.length <= 0) {
    return <h1>No Todo Item Found</h1>;
  }

  return (
    <ul>
      {todoList.map((item) => {
        const { id, title, description, completed } = item;
        return (
          <TodoItem
            key={`todo-${id}`}
            title={title}
            description={description}
            completed={completed}
            id={id}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
}
