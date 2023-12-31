import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Users from './pages/Users.jsx'
import Pics from './Pics.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home/>}>
      <Route path='/user' element={<Users/>}/>
      <Route path='/pics' element={<Pics/>}/>
      <Route path='/Signup' />
      <Route path='/login'/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router}/>
  </React.StrictMode>
)
