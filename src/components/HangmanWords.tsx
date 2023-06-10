type HangmanWordsProps = {
    guessedLetters: string[]
    wordToGuess: string
    isLoser: boolean
}

const HangmanWords = ({guessedLetters, wordToGuess, isLoser}: HangmanWordsProps) => {
    return (
        <>
            <div className="flex gap-1 text-8xl font-bold uppercase font-mono">
                {wordToGuess.split("").map((letter, index) => (
                        <span key={index} className="border-b-8 border-black">
                        <span
                            className={guessedLetters.includes(letter) ? "text-black" : "invisible"}>
                            {letter}
                        </span>
                    </span>
                    )
                )}
            </div>
            <span className="text-xl text-green-500 font-bold underline"> {isLoser ? wordToGuess : ""} </span>
        </>

    )
}

export default HangmanWords