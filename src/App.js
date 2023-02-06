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

  console.log("HI");
  

  return (
    <div className='root'>
      <Header />
      <div className="game-container">
        <div>
          <Figure />
          <div>
            <WrongLetters />
            <LetterInput selectedWord={selectedWord} correctLetters={correctLetters} wrongLetters={wrongLetters} addLetter={addLetter}/>
          </div>
        </div>
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </div>
  );

}

export default App;
