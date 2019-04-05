import React from 'react'

function Question(props) {
  const { optionOne, optionTwo } = props.question
  return (
    <div className='decision-block flex-flex-start-v p10'>
      <h2>Would you rather...</h2>
      <div className='flex-start-h'>
        <input type='radio' name='optionOne' className='radio-btn' value=''/>
          {optionOne.text}
      </div>

      <div className='flex-start-h'>
        <input type='radio' name='optionTwo' className='radio-btn' value=''/>
        <div style={{ width: '100%' }}>{optionTwo.text}</div>
      </div>

      <button>Submit</button>
    </div>
  )
}


export default Question
