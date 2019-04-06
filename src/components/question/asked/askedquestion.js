import React from 'react'

function AskedQuestion(props) {
  console.log('PROPS: ', props)
  const { optionOne, optionTwo } = props.question
  let votes = optionOne.votes.length + optionTwo.votes.length
  let percentOne = Math.floor((optionOne.votes.length/votes) * 100)
  let percentTwo = Math.floor((optionTwo.votes.length/votes) * 100)

  return (
    <div className='decision-block flex-space-between-v p10'>
      <div className={['flex-flex-start-v question-block p5 mb10', percentOne > 50 && 'selected'].join(' ')}>
        <h4>Would you rather {optionOne.text}?</h4>
        <div>{`${percentOne}%`}</div>
        <div>{`${optionOne.votes.length} out of ${votes}`}</div>
      </div>
      <div className={['flex-flex-start-v question-block p5 mb10', percentTwo > 50 && 'selected'].join(' ')}>
        <h4>Would you rather {optionTwo.text}?</h4>
        <div>{`${percentTwo}%`}</div>
        <div>{`${optionTwo.votes.length} out of ${votes}`}</div>
      </div>
    </div>
  )
}


export default AskedQuestion
