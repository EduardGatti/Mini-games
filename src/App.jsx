
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './comum/componentes/Body/Body'
import Conversor from './comum/componentes/Conversor/Conversor'
import ConversorMoeda from './comum/componentes/ConversorMoeda/ConversorMoeda'



function App() {

  
  const router = createBrowserRouter([
  
  {
     path: '/conversor',
     element: <Conversor />,
  },
  {
    path: '/',
    element: <Body />,
  },
  {
    path: '/moeda',
    element: <ConversorMoeda />,
  }
 ])

    return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
