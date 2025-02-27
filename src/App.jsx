
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './comum/componentes/Body/Body'
import Conversor from './comum/componentes/Conversor/Conversor'
import ConversorMoeda from './comum/componentes/ConversorMoeda/ConversorMoeda'
import ConversorDistancia from './comum/componentes/ConversorDistancia/ConversorDistancia'
import IMC from './comum/componentes/IMC/IMC'
import Cronometro from './comum/componentes/Cronometro/Cronometro'



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
  },
  {
    path: '/imc',
    element: <IMC />,
  },
  {
    path: '/distancia',
    element: <ConversorDistancia />,
  },
  {
    path: '/cronometro',
    element: <Cronometro />,
  },
 ])

    return (
    <>
    <RouterProvider router={router}/>

    </>
  )
}

export default App
