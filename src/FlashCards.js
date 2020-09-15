import React from "react";
import FlashCard from "./Flashcard";


const FlashCards = ({flashcards}) => {
  return(
  <table>
    <tr>
      <th>Question</th>
      <th>Answer</th>
    </tr>
  
  {
    flashcards.map((flashcard) => (
      <FlashCard key={flashcard.id} {...flashcard} />
    ))
  }
</table>
  )
}



 

export default FlashCards;