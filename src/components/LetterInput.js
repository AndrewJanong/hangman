import { useRef, useState } from "react";

export default function LetterInput({selectedWord, correctLetters, wrongLetters, addLetter}) {
    const inputRef = useRef(null);
    const [input, setInput] = useState('');


    const handleClick = (e) => {
        let letter = inputRef.current.value.toUpperCase();

        if (correctLetters.includes(letter) || wrongLetters.includes(letter)) {
            console.log("Letter has been slected before");
        } else if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
            if (selectedWord.toUpperCase().split('').includes(letter)) {
                addLetter(letter, "correct");
            } else {
                addLetter(letter, "wrong");
            }
        } else {
            console.log('Please enter a letter a-z or A-Z')
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
        </div>
    )
}

