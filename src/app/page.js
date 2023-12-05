import Image from 'next/image'
import MyApp from '@/tt/Button'
import AboutPage from '@/tt/AboutPage'
import Profile from '@/tt/ava'
import ShoppingList from '@/tt/product'
import Game from './tic-tac-toe/Board'

export default function Home() {

  return (

     

      <div>
      <Game></Game>
      <MyApp></MyApp> 
      <AboutPage></AboutPage>
      <Profile></Profile>
      <ShoppingList></ShoppingList>
      </div>
      
  )
}
