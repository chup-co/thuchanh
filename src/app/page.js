import Image from 'next/image'
import Game from './tictactoe/Game'
import MyApp from '@/tt/Button'
import AboutPage from '@/tt/AboutPage'
import Profile from '@/tt/ava'
import ShoppingList from '@/tt/product'

import Board from './tic-tac-toe/App'


export default function Home() {

  return (

      /* <Game></Game>  */

      <div>
       <MyApp></MyApp> 
      <AboutPage></AboutPage>
      <Profile></Profile>
      <ShoppingList></ShoppingList>
      <Board></Board>
      </div>
      
  )
}
