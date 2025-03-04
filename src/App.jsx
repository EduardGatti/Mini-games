
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './comum/componentes/Body/Body'
import Conversor from './comum/componentes/Conversor/Conversor'
import ConversorMoeda from './comum/componentes/ConversorMoeda/ConversorMoeda'
import ConversorDistancia from './comum/componentes/ConversorDistancia/ConversorDistancia'
import IMC from './comum/componentes/IMC/IMC'
import Cronometro from './comum/componentes/Cronometro/Cronometro'
import ContadorDePalavras from './comum/componentes/ContadorDePalavras/ContadorDePalavras'
import GeradorDeSenhas from './comum/componentes/GeradorDeSenhas/GeradorDeSenhas'
import ConversorDeTempo from './comum/componentes/ConversorDeTempo/ConversorDeTempo'
import CalculadoraJuroSimples from './comum/componentes/CalculadoraJuroSimples/CalculadoraJuroSimples'
import ConversorPeso from './comum/componentes/ConversorPeso/ConversorPeso'
import ContadorDeCaracteres from './comum/componentes/ContadorCaracter/ContadorCaracter'
import CalculadoraDeGorjeta from './comum/componentes/CalculadoraDeGorjeta/CalculadoraDeGorjeta'
import ConversorVelocidade from './comum/componentes/ConversorVelocidade/ConversorVelocidade'
import ListaTarefas from './comum/componentes/ListaTarefas/ListaTarefas'
import CalculadoraDeArea from './comum/componentes/CalculadoraDeArea/CalculadoraDeArea'
import ConversorDeVolume from './comum/componentes/ConversorDeVolume/ConversorDeVolume'
import RelogioVirtual from './comum/componentes/RelogioVirtual/RelogioVirtual'
import CalculadoraDeCalorias from './comum/componentes/CalculadoraDeCalorias/CalculadoraDeCalorias'
import JogoDaVelha from './comum/componentes/JogoDaVelha/JogoDaVelha'



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
  {
    path: '/palavras',
    element: <ContadorDePalavras />,
  },
  {
    path: '/gerador',
    element: <GeradorDeSenhas />,
  },
  {
    path: '/conversortempo',
    element: <ConversorDeTempo/>,
  },
  {
    path: '/juroSimples',
    element: <CalculadoraJuroSimples />,
  },
  {
    path: '/conversorpeso',
    element: <ConversorPeso />,
  },
  {
    path: '/contadorcaracter',
    element: <ContadorDeCaracteres />,
  },
  {
    path: '/calculadoragorjeta',
    element: <CalculadoraDeGorjeta />,
  },
  {
    path: '/conversorvelocidade',
    element: <ConversorVelocidade />,
  },
  {
    path: '/listatarefas',
    element: <ListaTarefas />,
  },
  {
    path: '/calculadoraArea',
    element: <CalculadoraDeArea />,
  },
  {
    path: '/conversorvolume',
    element: <ConversorDeVolume />,
  },
  {
    path: '/relogiovirtual',
    element: <RelogioVirtual />,
  },
  {
    path: '/calculadoracalorias',
    element: <CalculadoraDeCalorias />,
  },
  {
    path: '/jogodavelha',
    element: <JogoDaVelha />,
  },
 ])

    return (
    <>
    <RouterProvider router={router}/>

    </>
  )
}

export default App
