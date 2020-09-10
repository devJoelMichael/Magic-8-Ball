import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: [],
      question: ""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state 
    // write your code here!
    var quotes = ["Say it ain't so. I will not go. Turn the lights off. Carry me home.", "You have chosen the path of the black sheep rather than that of the unicorns and puppies.", "Fate fell short this time.", "The perfect life is waiting for you.", "It takes disaster to learn a lesson.", "Rise above! You're gonna rise above!", "They say what doesn't kill us, makes us who we are", "Hey now, you're an all star get your game on, go play hey now, you're a rock star get the show on, get paid and all that glitters is gold only shooting stars break the mold.", "Dan Bakitus says you're shallow he said you've got no integrity, but you don't know Dan Bakitus and Dan Bakitus, he don't know you!", "Oh yeah, you've got style it's plain to see!"]
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    // Update the return statement below to reflect the outcome of your code.
    return quotes[randomNumber];
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value })
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    const answer = this.getAnswer()
    this.setState({ answer: answer })
  }

  render(){
    return (
      <div>
        <h1>Magic 8 Ball</h1>
        <input
          id="inputBox"
          type='text'
          onChange={ this.handleChange }
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p> { this.state.answer } </p>
      </div>
    )
  }
}

export default App;
