import { useState } from 'react';
import DogCardList from './components/DogCardList';
import cardsJson from './components/cards.json';
import './App.css'

function App() {
  const [cards, setCards] = useState(cardsJson);
  return (
    <DogCardList dogcards = {cards} />
  )
}

export default App
