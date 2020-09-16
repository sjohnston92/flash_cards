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
    showAnswer: true,
    
  };

  toggleAnswer = (answer)=> {
    const toggle = this.state.showAnswer ? true : false;
    if (toggle === false)
    return (answer) === "";
    }
  


  removeCard = (id) => {
    const flashcards = this.state.flashCards.filter(flashCard => {
      if (flashCard.id !== id)
      return flashCard
    });
    this.setState({flashCards: [...flashcards],});
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
      <FlashCards flashcards={this.state.flashCards}  
      remove={this.removeCard} toggle={this.toggleAnswer}/>
        
    

    </div>
  );
}
}
export default App;
