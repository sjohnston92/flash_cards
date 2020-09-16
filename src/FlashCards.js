import React from "react";
import FlashCard from "./Flashcard";


const FlashCards = ({flashcards, remove}) => {
  return(
  <table>
    <thead>
    <tr>
      <th>Question</th>
      <th>Answer</th>
    </tr>
    </thead>
    <tbody>
  {
    flashcards.map((flashcard) => (
      <FlashCard key={flashcard.id} {...flashcard} remove={remove} />
    ))
  }
</tbody>
</table>
  )
}



 

export default FlashCards;