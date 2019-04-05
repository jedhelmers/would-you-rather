import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionBlock from './question/QuestionBlock'

class Questions extends Component {
  render() {

    const { question } = this.props

    if(question === null) {
      return (
        <p>This question doesn't exist</p>
      )
    }


    return (
      <div className='question-body'>
        {this.props.questionsIds.map(id => (
          <li key={id}>
            <QuestionBlock id={id}/>
          </li>
        ))}

        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps({ questions }){
  return {
    questionsIds: Object.keys(questions)

  }
}

export default connect(mapStateToProps)(Questions)
