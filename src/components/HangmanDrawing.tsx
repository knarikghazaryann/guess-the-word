const HEAD = (
    <div className="w-[70px] h-[70px] rounded-full border-[10px] border-black absolute top-[50px] right-[-30px]"/>
)

const BODY = (
    <div className="w-2.5 h-[100px] bg-black absolute top-[120px] right-0"/>
)

const RIGHT_ARM = (
    <div className="w-[100px] h-2.5 bg-black absolute top-[150px] right-[-100px] rotate-[-30deg] origin-bottom-left"/>
)

const LEFT_ARM = (
    <div className="w-[100px] h-2.5 bg-black absolute top-[150px] right-[10px] rotate-[30deg] origin-bottom-right"/>
)

const RIGHT_LEG = (
    <div className="w-[100px] h-2.5 bg-black absolute top-[210px] right-[-90px] rotate-[60deg] origin-bottom-left"/>
)

const LEFT_LEG = (
    <div className="w-[100px] h-2.5 bg-black absolute top-[210px] right-0 rotate-[-60deg] origin-bottom-right"/>
)

type HangmanDrawingProps = {
    numberOfGuesses: number
}

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
    console.log(numberOfGuesses)
    return (
        <div className="relative">
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className="h-[50px] w-2.5 bg-black absolute top-0 right-0"/>
            <div className="h-2.5 w-[200px] bg-black ml-[120px]"/>
            <div className="h-[400px] w-2.5 bg-black ml-[120px]"/>
            <div className="h-2.5 w-[250px] bg-black"/>
        </div>
    )
}

export default HangmanDrawing