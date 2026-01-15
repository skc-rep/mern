import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import Studentrecords from './components/Studentrecords'
import Addbar from './components/Add'
import Update from './components/Update'

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
    {
      path:"/upt/:id",
      element:<Update />
    },
  ])

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default App