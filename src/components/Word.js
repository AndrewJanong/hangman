export default function Word({selectedWord, correctLetters}) {

    console.log(correctLetters);

    return (
        <div className="word">
            {selectedWord.toUpperCase().split('').map( (letter, i) => {
                return (
                    <span className="letter" key={i}>
                        {correctLetters.includes(letter) ? letter : ''}
                    </span>
                )
            })}
        </div>
    )
}