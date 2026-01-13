import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import Studentrecords from './pages/Studentrecords'
import Addbar from './pages/Addbar'

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