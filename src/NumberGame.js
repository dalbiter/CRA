import React, { useState } from 'react';
import './NumberGame.css'

const NumberGame = (props) => {
    const genRandom = () => Math.floor(Math.random() * 10) + 1;
    const restart = () => {
        setTarget(genRandom())
        setGuess(null)
        setCount(0)    
    }
    const makeGuess = () => {
        setGuess(genRandom());
        setCount(count+1);
    }
    const [guess, setGuess] = useState(genRandom())
    const [target, setTarget] = useState(genRandom())
    const [count, setCount] = useState(0)
    const isWinner = target === guess;
    return (
        <div className="NumberGame">
            <h1>Target Num: {target}</h1>
            {/* <h1 style={{ color: guess === target ? 'green' : 'red'}}>Your Guess: {guess}</h1> */}
            <h1 className={isWinner ? 'winner' : 'loser'}>Your Guess: {guess}</h1>
            <h3>Number of Guesses: {count}</h3>
            {!isWinner && <button onClick={makeGuess}>Generate Num</button>}
            <button onClick={restart}>New Game</button>
        </div>
    )
}

export default NumberGame;