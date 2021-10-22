import React from 'react';
import './Questions.css';

class Questions extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
      value: '',
      questions: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('Your question was submitted: ' + this.state.value);
        this.setState(prevState => ({questions: [...prevState.questions, [this.state.value]]}));
        // console.log(this.state.questions);
        event.preventDefault();
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Question: {console.log(this.state.questions)}
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

export default Questions;