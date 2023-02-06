import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
//import UsedWords from './components/UsedWords';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import LetterInput from './components/LetterInput';


const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

function App() {
  
  //const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  function addLetter(letter, arrType) {
    if (arrType === "correct") {
      setCorrectLetters([...correctLetters, letter]);
    } else if (arrType === "wrong") {
      setWrongLetters([...wrongLetters, letter]);
    }
  }

  function checkWin() {
    /*
    return selectedWord.toUpperCase().split('').reduce((letter, status) => {
      return correctLetters.includes(letter) && status
    }, true);
    */

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

  console.log("HI");
  console.log(checkWin())

  return (
    <div className='root'>
      <Header />
      <div className="game-container">
        <div>
          <Figure wrongLetters={wrongLetters}/>
          <div>
            <WrongLetters wrongLetters={wrongLetters}/>
            <LetterInput selectedWord={selectedWord} correctLetters={correctLetters} wrongLetters={wrongLetters} addLetter={addLetter}/>
          </div>
        </div>
        {checkWin() ? <p>YOU WON</p> : <Word selectedWord={selectedWord} correctLetters={correctLetters} />}
        {checkLose() && <p>YOU LOST</p>}
      </div>
    </div>
  );

}

export default App;
