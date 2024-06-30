// Functional
// Class Based

// txs(typescript)
// jxs(javascript)

// Typescript - Javascript with superpower
// error prevent
// Debugging
// code Refractor

import Counter from "./app/counter";
import Profile from "./app/profile";
import Todo from "./app/todo/todo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPAge from "./lib/router/error-page";
import TodoDetail from "./app/todo/todo-detail";
import Root from "./app/layout/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Todo />,
      },

      {
        path: "/todo/:id",
        element: <TodoDetail />,
      },

      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },

  { path: "*", element: <ErrorPAge /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
