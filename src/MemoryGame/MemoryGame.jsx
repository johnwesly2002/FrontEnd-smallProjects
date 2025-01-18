import React, { useState } from 'react'
import "./MemoryGame.css";
import Image from './Image';
export default function MemoryGame() {
  const[Images, setImages] = useState([
    "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
    "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
    "https://images.unsplash.com/photo-1520763185298-1b434c919102",
    "https://images.unsplash.com/photo-1442458017215-285b83f65851",
    "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
    "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
    "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
    "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
    "https://images.unsplash.com/photo-1520763185298-1b434c919102",
    "https://images.unsplash.com/photo-1442458017215-285b83f65851",
    "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
    "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
])
const[flippedCards, setFlippedCards] = useState([]);
const[matchedCards, setmatchedCards] = useState([]);
const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
      const newFlippedCards = [...flippedCards, index];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        const [firstIndex, secondIndex] = newFlippedCards;

        if (Images[firstIndex] === Images[secondIndex]) {
          setmatchedCards([...matchedCards, firstIndex, secondIndex]);
          setFlippedCards([]); 
        } else {
          setTimeout(() => setFlippedCards([]), 1000);
        }
      }
    }
  };
  return (
    <div className='MainContainer'>
    <div className='headingText'>MemoryGame</div>
    <div className='imageContainer'>
    {Images.map((itm, index) => (
        <Image  key={index} img = {itm} visible = {flippedCards.includes(index) || matchedCards.includes(index)} onClick={() => handleCardClick(index)} />
    ))}
    {matchedCards.length == 12 && <span className='headerName'>You Won the Game</span>}
    </div>
    </div>
  )
}
