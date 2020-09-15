import React, { Component } from 'react';
import './App.css';
import FlashCards from "./FlashCards";
import CardForm from "./CardForm"


class App extends Component {
  state = {
    flashCards: [
      { id: 1,
         question: "What color is the sky",
          answer: "Blue"},
    ],
    
  };


    addFlashCard = (flashcard) => {
      console.log(flashcard);
      const newFlashCard = {...flashcard, id:Math.random() + ""};
      this.setState({
        flashCards: [newFlashCard, ...this.state.flashCards]
      });
    };

render() {
  return (
    <div>
      <h1>Flash Cards</h1>
      <br/>
      <CardForm addFlashCard={this.addFlashCard}/>
      <br/>
      <FlashCards flashcards={this.state.flashCards} />
    </div>
  );
}
}
export default App;
