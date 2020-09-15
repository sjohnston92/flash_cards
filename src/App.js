import React, { Component } from 'react';
import './App.css';
import FlashCards from "./FlashCards";


class App extends Component {
  state = {
    flashCards: [
      { id: 1,
         question: "What color is the sky",
          answer: "Blue"},
    ],
    
  };

render() {
  return (
    <div>
      <h1>Flash Cards</h1>
      <br/>
      <CardForm />
      <br/>
      <FlashCards flashcards={this.state.flashCards} />
    </div>
  );
}
}
export default App;
