
import TodoItem from "./todo-item";
import { useState } from "react";
// function TodoList(){
//     return(
//         <ul>
//             <TodoItem text="Go to office" description="please reach before"/>
//             <TodoItem text="Drink water" description="Every 4hr"/>
//             <TodoItem text="Complete task" description="Complete assignment"/>
//         </ul>
//     )
// }



const DEFAULT_TODO_LIST =[
    {
        id:1,
        title:"Go to office",
        description:"Please reach reach before 9",
        completed:false,
    },
    {
        id:2,
        title:"Drink water",
        description:"every 4hr",
        completed:true,
    },
]


export default function TodoList() {
    const [todoList,setTodoList] = useState(DEFAULT_TODO_LIST)
    const toggleCompleted = (id)=>{
        const newTodos = todoList.map(todo=>{
            if (todo.id === id) {
                return{
                    ...todo,
                    completed:!todo.completed
                }
            }
        
            return todo
        })
        setTodoList(newTodos)}
        const removeTodo = (id)=>{
            const newTodos = todoList.filter(item=>item.id!==id)
           setTodoList(newTodos)
            // .pop()
            // .slice()
            // .unshift()
        }

    return(
        <ul>
          {todoList.map((item)=>{
            return(
                <TodoItem 
                key ={`todo-${item.id}`} 
                text={item.title} 
                description={item.description} 
                id={item.id} 
                toggleCompleted={toggleCompleted}
                removeTodo={removeTodo}
                />
                
            )
          })}
          
        </ul>
    );

}


