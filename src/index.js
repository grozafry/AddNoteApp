import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Textbox = ({text}) => (<h1>{text}</h1>)

const Button = ({text, counter, handleClick}) => {  
  return(
      <button onClick={() => handleClick(counter+1) }>{text}</button>
  )
}

const Pref = ({text, counter}) => {
  return(
    <>
    <td>{text}</td>
    <td>{counter}</td>
    </>
  )
}

const Statistics = ({text1, text2, good, neutral, bad}) =>{
  const avg = (good - bad)/(good + neutral + bad)
  const pos = (good*100)/(good + neutral + bad)
  return(
    <>
    <div>{text1} {avg}</div>
    <div>{text2} {pos}</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
    <Textbox text='Give feedback'/>
    <Button text='good' counter={good} handleClick={setGood} />
    <Button text='neutral' counter={neutral} handleClick={setNeutral} />
    <Button text='bad' counter={bad} handleClick={setBad} />
    <Textbox text='Statistics' />
    
    <table>
      <tr>
        <Pref text='good' counter={good} />
      </tr>
      <tr>
        <Pref text='neutral' counter={neutral} />
      </tr>
      <tr>
        <Pref text='bad' counter={bad} />    
      </tr>
    </table>
    
    
    
    <Statistics text1='average' text2='positive' good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)