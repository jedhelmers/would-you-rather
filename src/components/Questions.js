import React, { Component } from 'react'
import { QuestionBlock } from './question/QuestionBlock'

export class Questions extends Component {
  render() {
    return (
      <div className='question-body'>
        <QuestionBlock />
        {this.props.children}
      </div>
    )
  }
}

export default Questions
