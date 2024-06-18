
import TodoItem from "./todo-item";

// function TodoList(){
//     return(
//         <ul>
//             <TodoItem text="Go to office" description="please reach before"/>
//             <TodoItem text="Drink water" description="Every 4hr"/>
//             <TodoItem text="Complete task" description="Complete assignment"/>
//         </ul>
//     )
// }






export default function TodoList(props) {
    const {todoList,toggleCompleted,removeTodo} = props

    return(
        <ul>
            
          {todoList.map((item)=>{
            const {id,title,description,completed}=item
            return(
                <TodoItem 
                key ={`todo-${id}`} 
                text={title} 
                description={description} 
                completed={completed}
                id={id} 
                toggleCompleted={toggleCompleted}
                removeTodo={removeTodo}
                />
                
            )
          })}
          
        </ul>
    );

}


