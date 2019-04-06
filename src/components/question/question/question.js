import React from 'react'

function Question(props) {
  const { optionOne, optionTwo } = props.question
  return (
    <div className='decision-block flex-flex-start-v p10'>
      <h2>Would you rather...</h2>
      <div className='flex-flex-start-h'>
        <input type='radio' name='optionOne' className='radio-btn' value='' style={{ width: 20 }}/>
        <div>{optionOne.text}</div>
      </div>

      <div className='flex-flex-start-h'>
        <input type='radio' name='optionTwo' className='radio-btn' value='' style={{ width: 20 }}/>
        <div>{optionTwo.text}</div>
      </div>

      <button className='mt10'>Submit</button>
    </div>
  )
}


export default Question
