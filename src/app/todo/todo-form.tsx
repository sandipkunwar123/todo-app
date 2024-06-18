import { useState } from "react";
import { Button } from "../../components/ui/button";
import uuid4 from "uuid4";

function TodoForm(props) {
  const { addTodo } = props;
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const { title, description } = todo;

  const handleChange = (e) => {
    const name = e.target.name;
    setTodo({ ...todo, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = { ...todo, completed: false, id: uuid4() };
    addTodo(newTodos);
    setTodo({
      title: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          className="border"
          value={title}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
          className="border"
          value={description}
        />
      </div>
      <Button>Add</Button>
    </form>
  );
}
export default TodoForm;
