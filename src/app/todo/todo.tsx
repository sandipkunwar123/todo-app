import Search from "../../components/search";
import TodoList from "./todo-list";
import Button from "../../components/button";

export default function Todo(){
    return(
        <div>
            <Search/>
            <TodoList/>
            <Button title="Add Todo"/>
        </div>
    )
}