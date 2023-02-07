export default function Lose({reset, selectedWord}) {
    return (
        <div className="lose">
            <p>You Lost! The word was {selectedWord}</p>
            <button onClick={reset} >Try Again?</button>
        </div>
    )
    
}