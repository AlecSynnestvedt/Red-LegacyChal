import React, { Component } from 'react';
import FetchDisplay from './FetchDisplay';

class Fetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: ""
    }
  }
  componentDidMount() {
    console.log("Component mounted");
    console.log(this.state.img);
    fetch("//https://dog.ceo/dog-api/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          img: data.url
        })
      })
      .catch(console.log)
      console.log(this.state.img)
  }
  render() {
    return(
      <div>
        <h2>DOG:</h2>
        <FetchDisplay url={this.state.img} />
      </div>
    )
  }
}

export default Fetch;

//https://dog.ceo/dog-api/