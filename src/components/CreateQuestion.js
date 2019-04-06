import React, { Component } from 'react'

export class CreateQuestion extends Component<Props> {
  render() {
    return (
      <div className='question-body'>
        <header className='flex-center-v'><h2>Create New Question</h2></header>
        <div className='flex-space-between-h'>
        <div className='decision-block flex-space-between-v p10'>
          <div className={['flex-flex-start-v '].join(' ')}>
            <h3>Would you rather ?</h3>
            <input type='text'/>
            <div className='flex-space-between-h'>
              <div className='hr'></div>
              <div>or</div>
              <div className='hr'></div>
            </div>
            <input type='text'/>
          </div>

        </div>


        </div>

        {this.props.children}
      </div>

    )
  }
}

export default CreateQuestion
