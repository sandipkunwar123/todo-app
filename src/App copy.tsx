// Functional
// Class Based

// txs(typescript)
// jxs(javascript)

// Typescript - Javascript with superpower
// error prevent
// Debugging
// code Refractor

//import {title,description,buttonTitle} from './main'

// import TodoList from "./app/todo/todo-list";
// import Button from './components/button'
// import Search from "./components/search";
import Counter from "./app/counter";
import ToggleLight from "./app/toggle-light";

function App() {
//   const title = "Hello World"
// const description ="Welcome to the App"
// const buttonTitle =" Click me"

  return (
    <div className="text-red-900 bg-green-100">
      {/* <Search/>
      <h6>{title}</h6>
      <p>{description}</p>
      <button className="bg-green-400 px-2 py-2 text-white rounded text-sm font-medium ">{buttonTitle}</button>
      <TodoList/>
      <Button title="Click me"/>
      <Button title="Click you"/> */}
      <Counter/>
      <ToggleLight/>
      
      
    </div>
  );
}
export default App;





