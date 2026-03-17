import { useState } from 'react'

import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
/* data centralization  */
import GamesData from './data/GamesData'
import options from './data/NavOptions'
import GameCard from './components/GameCard'


import './Index.css'

function App() {

  return (
    <>
      <AppHeader options={options} />
      <AppMain GamesData={GamesData} GameCard={GameCard} />
      <AppFooter />
    </>
  )
}

export default App
