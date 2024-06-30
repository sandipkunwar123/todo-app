import { useState } from "react";
import { Button } from "../../components/ui/button";
import uuid4 from "uuid4";
import { Input } from "@/components/ui/input";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ITodoItem } from "./todo";

interface TodoFormsProps {
  addTodo: (todo: ITodoItem) => void;
}

function TodoForm(props: TodoFormsProps) {
  const { addTodo } = props;
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const { title, description } = todo;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setTodo({ ...todo, [name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodos = { ...todo, completed: false, id: uuid4() };
    addTodo(newTodos);
    setTodo({
      title: "",
      description: "",
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add Todo</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Todo</AlertDialogTitle>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              label="Title"
              value={title}
            />
          </div>
          <div>
            <Input
              type="text"
              id="description"
              name="description"
              onChange={handleChange}
              label="Description"
              value={description}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default TodoForm;
