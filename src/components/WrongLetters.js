export default function WrongLetters({wrongLetters}) {
    return (
        <div className="wrong-letters">
            <p>Wrong Letters:</p>
            {wrongLetters.map((letter, i) => {
                return (
                    <span className="wrong-letter" key={i}>
                        {letter.toUpperCase()}
                    </span>
                )
            })}
        </div>
    )
}