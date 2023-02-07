import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import LetterInput from './components/LetterInput';
import Win from './components/Win';   
import Lose from './components/Lose';


const words = ['python', 'javascript', 'go', 'java', 'kotlin', 'PHP', 'Swift', 'R', 'Ruby', 'TypeScript', 'HTML', 'CSS', 'nosql', 'Rust']
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);


  console.log(selectedWord);

  

  function addLetter(letter, arrType) {
    if (arrType === "correct") {
      setCorrectLetters([...correctLetters, letter]);
    } else if (arrType === "wrong") {
      setWrongLetters([...wrongLetters, letter]);
    }
  }

  function checkWin() {
    let win = true;

    let selected = selectedWord.toUpperCase().split('');
    for (let i = 0; i < selected.length; i++) {
      win = win && correctLetters.includes(selected[i]);
    }

    return win;
  }

  function checkLose() {
    return wrongLetters.length >= 6;
  }

  function reset() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    setCorrectLetters([]);
    setWrongLetters([]);
  }

  return (
    <div className='root'>
      <Header />
      <div className="game-container">
        <div>
          <Figure wrongLetters={wrongLetters}/>
          <div>
            <WrongLetters wrongLetters={wrongLetters}/>
            {(!checkWin() && !checkLose()) && <LetterInput selectedWord={selectedWord} correctLetters={correctLetters} wrongLetters={wrongLetters} addLetter={addLetter}/>}
          </div>
        </div>
        {checkWin() 
          ? <Win reset={reset}/>
          : <Word selectedWord={selectedWord} correctLetters={correctLetters} />}
        {checkLose() && <Lose reset={reset} selectedWord={selectedWord} />}
      </div>
    </div>
  );

}

export default App;
