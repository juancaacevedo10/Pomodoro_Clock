import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css' 
const setTimer = (props) => {
    const id = props.title.toLowerCase();
  return (
    <div className="timer-container">
      <h1 id={`${id}-label`}>{props.title} length</h1>
      <div>
          <button id={`${id}-decrement`} onClick={props.handleDecrease}>
              <i className="fas fa-minus" />
          </button>
          <span id={`${id}-length`} >{props.count}</span>
          <button id={`${id}-increment`} onClick={props.handleIncrease}>
              <i className="fas fa-plus" />
          </button>
      </div>
    </div>
  )
}

export default setTimer
