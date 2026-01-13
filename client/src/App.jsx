import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import Studentrecords from './components/Studentrecords'
import Addbar from './components/Add'

const App = () => {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/stdrecords",
      element:<Studentrecords />
    },
    {
      path:"/addrecords",
      element:<Addbar />
    },
  ])

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default App