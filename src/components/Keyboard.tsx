const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled?: boolean
}

const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter, disabled = false}: KeyboardProps) => {
    return (
        <div className="flex flex-wrap gap-0.5">
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)

                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={
                            `border - 2 border-black w-14 py-4 text-2xl uppercase font-bold hover:bg-sky-200 disabled:pointer-events-none 
                            ${isInactive ? "opacity-50" : ""}  
                            ${isActive ? "bg-sky-200 text-white" : ""}`
                        }
                        key={key}
                        disabled={isActive || isInactive || disabled}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard