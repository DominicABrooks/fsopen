import { useState } from 'react'

const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const IncreasePoint = (points, setPoints, selected) => {
  const copy = [...points]
  return (
    () => {
      copy[selected]++;
      setPoints(copy);
    }
  )
}

const findMostVoted = (points) => {
  let highestNumVotes = 0;
  let highestVotedIndex = 0;
  for (let index = 0; index < points.length; index++) {
    if (points[index] > highestNumVotes) {
      highestVotedIndex = index;
      highestNumVotes = points[index];
    }
  }
  return {highestVotedIndex, highestNumVotes};
}

const AnecdoteWithMostVotes = ({anecdotes, points}) => {
  const mostVoted = findMostVoted(points);
  if(mostVoted.highestNumVotes <= 0)
  {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <p>{anecdotes[mostVoted.highestVotedIndex]}</p>
      <p>has {points[mostVoted.highestVotedIndex]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <Header text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote"/>
      <Button onClick={IncreasePoint(points, setPoints, selected)} text="vote"/>
      <Header text="Anecdote with most votes" />
      <AnecdoteWithMostVotes anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App