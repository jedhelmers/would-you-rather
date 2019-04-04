import React, { Component } from 'react'

export class QuestionBlock extends Component {
  render() {
    return (
      <div className='question-block'>
        <header className='pt5'><h3>John Doe asks: </h3></header>
        <div className='flex-space-between-h'>
          <div className='avatar-block'>
            <div className='avatar'></div>
          </div>
          <div className='decision-block flex-flex-start-v p10'>
            <h2>Would you rather...</h2>
            <p>eat pizza rolls</p>
            <p>eat pasta</p>
            <button>Submit</button>
          </div>
        </div>

      </div>
    )
  }
}

export default QuestionBlock
