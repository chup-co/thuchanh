import Game from "@/app/tic-tac-toe/Board"
import MyApp from "@/tt/Hook/button"
import AboutPage from "@/tt/Hook/aboutPage"
import Profile from "@/tt/Hook/ava"
import Product from "@/tt/Hook/product"
import Button1 from "@/tt/Hook/button1"

export default function Home() {

  return (
      <div>
      <Game></Game>
      <MyApp></MyApp>
      <Button1/>
      <AboutPage></AboutPage>
      <Profile></Profile>
      <Product/>
      </div>
  )
}
