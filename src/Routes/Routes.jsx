import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../Home/Main/Main";
import Home from "../Home/Home/Home";
import Login from "../LoginRegister/Login";
import Registration from "../LoginRegister/Registration";
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:'registration',
            element:<Registration></Registration>
        }
        
      ]
    },
  ]);
  export default router;