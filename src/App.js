import './App.scss';
import { useState } from 'react';
import { Statistics } from './components/Statistics/Statistics'
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions'
import { Title } from './components/Title/Title'
import { Notification } from './components/Notification/Notification'

export function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleIncrementGood = () => {
        setGood(good + 1)
    }

    const handleIncrementNeutral = () => {
        setNeutral(neutral + 1)
    }
  
    const handleIncrementBad = () => {
        setBad(bad + 1)
    }

    const total = bad + good + neutral;
    const percentage = Math.floor(good / total * 100);
    let stats;
    if (total === 0) {
      stats = <Notification message="No feedback given" />
    } else {
      stats = <Statistics good={good} neutral={neutral} bad={bad} total={total} percentage={percentage} />
    }
    return (
      <div className="App">
        <Title title="Please leave feedback">
          <FeedbackOptions handleIncrementBad={ handleIncrementBad} handleIncrementGood={ handleIncrementGood} handleIncrementNeutral={ handleIncrementNeutral}/>
        </Title>
        <Title title="Statistics">
          {stats}
        </Title>  
      </div>
    )
}