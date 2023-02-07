export default function Win({reset}) {
    return (
        <div className="win">
            <p>NICE!</p>
            <button onClick={reset}>Play Again?</button>
        </div>
    )
}