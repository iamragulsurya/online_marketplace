import { useState } from 'react'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Add from './pages/add/Add'
import Gig from './pages/gig/Gig'
import Orders from './pages/orders/Orders'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import Gigs from './pages/gigs/Gigs'
import MyGigs from './pages/mygigs/MyGigs'


import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    )}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/gigs",
          element:<Gigs />
        },
        {
          path:"/gig/:id",
          element:<Gig />
        },
        {
          path:"/Orders",
          element:<Orders />
        },
        {
          path:"/mygigs",
          element:<MyGigs />
        },
        {
          path:"/add",
          element:<Add />
        },
        {
          path:"/messages",
          element:<Messages />
        },
        {
          path:"/Message/:id",
          element:<Message />
        },
      ]
    },
  ]);

  return (
      <div>
       <RouterProvider router={router} />
      </div>
  )
}

export default App
