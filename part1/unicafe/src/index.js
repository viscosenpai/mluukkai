import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick} >{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Statistics = ({good, neutral, bad, statistics}) => {
  if (statistics.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <Statistic text='good' value={good} />
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='all' value={statistics.all} />
        <Statistic text='average' value={statistics.average / statistics.all} />
        <Statistic text='positive' value={(good / statistics.all) * 100 + " %"} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [statistics, setStatistics] = useState({
    all: 0,
    average: 0
  })

  const handleGoodClick = () => {
    setGood(good + 1)
    setStatistics({
      ...statistics,
      all: statistics.all + 1,
      average: statistics.average + 1
    })
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setStatistics({
      ...statistics,
      all: statistics.all + 1
    })
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setStatistics({
      ...statistics,
      all: statistics.all + 1,
      average: statistics.average - 1
    })
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} statistics={statistics} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
