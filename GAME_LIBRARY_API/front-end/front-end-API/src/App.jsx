import { useState, useEffect } from 'react'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import options from './data/NavOptions'
import GameCard from './components/GameCard'
import './Index.css'

function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(error => console.error(error))
  }, [games])

  return (
    <>
      <AppHeader options={options} />
      <AppMain GamesData={games} GameCard={GameCard} />
      <AppFooter />
    </>
  )
}

export default App