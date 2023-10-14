import { useState } from 'react'

const Header = (props) => (
    <h1>{props.text}</h1>
)

const Button = (props) => (
    <button onClick={props.onPress}>
      {props.text}
    </button>
)

const Statistic = ({text,value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if(total == 0)
  {
    return (
      <p>No feedback given</p>
    )
  }
  else
  {
    return (
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={(good - bad)/total} />
          <Statistic text="positive" value={(good / total) * 100} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback"/>
      <Button onPress={() => setGood(good + 1)} text="good"/>
      <Button onPress={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onPress={() => setBad(bad + 1)} text="bad"/>
      <Header text="statistics"/>
      <Statistics  good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App