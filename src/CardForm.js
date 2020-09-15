import React from "react";

class CardForm extends React.Component {
  state = { question: "", answer:""};

 
handleSubmit = (e) => {
  e.preventDefault();
  this.setState({
    question: "",
    answer: "",
  });
  this.props.addFlashCard(this.state);
};
handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
};


render(){
  const{ question, answer} = this.state;
  return(
    <form onSubmit={this.handleSubmit}>
      <input  required type="text" name="question" value={question} onChange={this.handleChange}></input>
      <label> Question</label>
      <input required type="text" name="answer" value={answer} onChange={this.handleChange}></input>
      <label>Answer</label>
      <br />
      <button onClick={this.handleSubmit}>Submit</button>
    </form>
  )
}




}



export default CardForm;