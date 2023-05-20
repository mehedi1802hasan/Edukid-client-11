import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "../Home/Main/Main";
import Home from "../Home/Home/Home";
import Login from "../LoginRegister/Login";
import Registration from "../LoginRegister/Registration";
import Error from "../ErrorPage/Error";
import Blogs from "../Blogs/Blogs";
import AddToys from "../Toys/AddToys";
import AllToys from "../Toys/AllToys";
import Mytoys from "../Toys/MyToys";


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
        },{
          path:'/blogs',
          element:<Blogs></Blogs>
        },{
          path:'addtoys',
          element:<AddToys></AddToys>
        },{
          path:'alltoys',
          element:<AllToys></AllToys>,
          loader:()=>fetch('http://localhost:5000/addToys')
        },{
          path:'mytoys',
          element:<Mytoys></Mytoys>
        }
      ]
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ]);
  export default router;