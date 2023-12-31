import React from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './Firebase/Provider';
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-auto max-w-7xl'>
    <React.StrictMode>
 <Provider>
 <RouterProvider router={router} />
 </Provider>
  </React.StrictMode>
  </div>
)
