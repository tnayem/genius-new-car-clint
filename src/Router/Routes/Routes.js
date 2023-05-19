import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import SignUp from '../../Pages/SignUp/SignUp';
import MyLogIn from '../../Pages/MyLogIn/MyLogIn';
import CheckOut from '../../Pages/CheckOut/CheckOut';
import Orders from '../../Pages/Orders/Orders';

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/mylogin',
          element:<MyLogIn></MyLogIn>
        },
        {
          path:'/checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/orders',
          element:<Orders></Orders>
        }
      ]
    }
  ]);
export default router;