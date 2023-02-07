import { useRef, useState } from "react";

export default function LetterInput({selectedWord, correctLetters, wrongLetters, addLetter}) {
    const inputRef = useRef(null);
    const [input, setInput] = useState('');
    const [used, setUsed] = useState(false);
    const [invalid, setInvalid] = useState(false);


    const handleClick = (e) => {
        let letter = inputRef.current.value.toUpperCase();

        if (correctLetters.includes(letter) || wrongLetters.includes(letter)) {
            setInvalid(false);
            setUsed(true);
        } else if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
            setInvalid(false);
            setUsed(false);
            if (selectedWord.toUpperCase().split('').includes(letter)) {
                addLetter(letter, "correct");
            } else {
                addLetter(letter, "wrong");
            }
        } else {
            setInvalid(true);
            setUsed(false);
        }

        inputRef.current.value = '';
        setInput('');
    }

    const handleChange = () => {
        setInput(inputRef.current.value);
    }

    return (
        <div className="letter-input">
            <input type="text" ref={inputRef} onChange={handleChange}/>
            <button onClick={handleClick} disabled={input.length !== 1}>Guess!</button>
            {used && <p style={{color:'red'}}>You guessed this word before</p>}
            {invalid && <p style={{color:'red'}}>Please enter a letter a-z/A-Z</p>}
        </div>
    )
}

