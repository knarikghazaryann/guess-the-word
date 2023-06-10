import HangmanDrawing from "./HangmanDrawing.tsx";
import HangmanWords from "./HangmanWords.tsx";
import Keyboard from "./Keyboard.tsx";
import words from "../../wordList.json";
import {useCallback, useEffect, useState} from "react";

const Hangman = () => {

    const randomWords = () => {
        return words[Math.floor(Math.random() * words.length)]
    }
    // @ts-ignore

    const [wordToGuess, setWordToGuess] = useState(randomWords)

    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

    const isLoser = incorrectLetters.length >= 6
    const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || isWinner || isLoser) return
        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters, isWinner, isLoser])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if (!key.match(/^[a-z]$/)) return

            e.preventDefault()
            addGuessedLetter(key)
        }
        document.addEventListener("keypress", handler)
        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [guessedLetters])


    return (
        <div className="max-w-[800px] flex flex-col gap-[2rem] my-0 mx-auto items-center">
            <div>
                <p className="text-4xl text-center text-green-500 font-bold"> {isWinner && "Winner! - Refresh to try again."} </p>
                <p className="text-4xl text-center text-red-500 font-bold"> {isLoser && "Loser:( - Refresh to try again."} </p>
            </div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWords guessedLetters={guessedLetters} wordToGuess={wordToGuess} isLoser={isLoser}/>
            <Keyboard
                disabled={isLoser || isWinner}
                activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
                inactiveLetters={incorrectLetters}
                addGuessedLetter={addGuessedLetter}
            />
        </div>
    )
}

export default Hangman