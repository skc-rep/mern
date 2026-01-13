import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'

const App = () => {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    }
  ])

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default App