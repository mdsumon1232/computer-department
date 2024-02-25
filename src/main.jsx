import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import Primary from "./Components/Primary/Primary.jsx";
import Register from "./Components/Register/Register";
import AllTeachers from "./Pages/AllTeachers/AllTeachers.jsx";
import BookList from "./Pages/BookList/BookList.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Home from "./Pages/Home/Home.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Primary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all/teachers",
        element: <AllTeachers />,
        loader: () => fetch("/public/teacher.json"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/book/list",
        element: <BookList />,
        loader: () => fetch("/public/bookList.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
