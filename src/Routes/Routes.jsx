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
import TabToyDetails from "../Home/ShopBYCategory.jsx/TabToyDetails";
import AllToysDetails from "../Toys/AllToysDetails";
import PrivateRoute from "./PrivateRoute";


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
          element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
        },{
          path:'/alltoys',
          element:<AllToys></AllToys>
          
        },
        {
          path:'allToysDetails/:id',
          element:<PrivateRoute><AllToysDetails></AllToysDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://edukids-server.vercel.app/addToys/${params.id}`)
        },{
          path:'/mytoys',
          element:<PrivateRoute><Mytoys></Mytoys></PrivateRoute>
        },{
          path:'tabtoydetails/:id',
          element:<PrivateRoute><TabToyDetails></TabToyDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://edukids-server.vercel.app/addToys/${params.id}`)

        }
      ]
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ]);
  export default router;