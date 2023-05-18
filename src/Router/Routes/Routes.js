import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import SignUp from '../../Pages/SignUp/SignUp';
import MyLogIn from '../../Pages/MyLogIn/MyLogIn';

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
        }
      ]
    }
  ]);
export default router;