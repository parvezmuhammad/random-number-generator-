// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onButtonClick = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState({count: random})
  }

  render() {
    const {count} = this.state
    return (
      <div className="random-bg-container">
        <div className="random-inside-container">
          <h1 className="heading">Random Number</h1>
          <p className="randomnumber-paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              className="button"
              onClick={this.onButtonClick}
              type="button"
            >
              Generate
            </button>
            <p className="heading">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
