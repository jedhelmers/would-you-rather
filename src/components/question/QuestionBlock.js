import React, { Component } from 'react'
import Question from './question/question'
import AskedQuestion from './asked/askedquestion'
import { connect } from 'react-redux'

class QuestionBlock extends Component {

  state = {
    toggle: true
  }

  render() {

    const { question, user } = this.props
    if(question === null) {
      return (
        <p>This question doesn't exist</p>
      )
    }
    console.log('props: ', user.avatarURL)
    return (
      <div className='question-block'>
        <header className='pt5 flex-center-v'><h3>{user.name} asks: </h3></header>
        <div className='flex-space-between-h'>
          <div className='avatar-block flex-center-v'>
            <div className='avatar' style={{ backgroundImage: user.avatarURL }}></div>
          </div>
          {this.state.toggle
            ? <Question question={question}/>
            : <AskedQuestion question={question}/>
          }



        </div>

      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }){
  const question = questions[id]
  const user = users[question.author]

  return {
    authedUser,
    question: question,
    user: user
  }
}

export default connect(mapStateToProps)(QuestionBlock)
