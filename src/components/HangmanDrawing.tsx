const HEAD = (
    <div className="w-[50px] h-[50px] lg:h-[70px] lg:w-[70px] rounded-full lg:border-[10px] border-[7px] border-black absolute top-[40px] lg:top-[50px] right-[-20px] lg:right-[-30px]" />
)

const BODY = (
    <div className="w-2 lg:w-2.5 h-[70px] lg:h-[100px] bg-black absolute top-[90px] lg:top-[120px] right-0" />
)

const RIGHT_ARM = (
    <div className="w-[70px] lg:w-[100px] h-2 lg:h-2.5 bg-black absolute top-[120px] lg:top-[150px] right-[-70px] lg:right-[-100px] rotate-[-30deg] origin-bottom-left" />
)

const LEFT_ARM = (
    <div className="w-[70px] lg:w-[100px] h-2 lg:h-2.5 bg-black absolute top-[120px] lg:top-[150px] right-[8px] lg:right-[10px] rotate-[30deg] origin-bottom-right" />
)

const RIGHT_LEG = (
    <div className="w-[70px] lg:w-[100px] h-2 lg:h-2.5 bg-black absolute top-[150px] lg:top-[210px] right-[-62px] lg:right-[-90px] rotate-[60deg] origin-bottom-left" />
)

const LEFT_LEG = (
    <div className="w-[70px] lg:w-[100px] h-2 lg:h-2.5 bg-black absolute top-[150px] lg:top-[210px] right-0 rotate-[-60deg] origin-bottom-right" />
)

type HangmanDrawingProps = {
    numberOfGuesses: number
}

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
    return (
        <div className="relative">
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className="h-[40px] lg:h-[50px] w-2.5 bg-black absolute top-0 right-0"/>
            <div className="h-2.5 w-[100px] lg:w-[200px] bg-black ml-[90px] lg:ml-[120px]"/>
            <div className="h-[300px] lg:h-[400px] w-2.5 bg-black ml-[90px] lg:ml-[120px]"/>
            <div className="h-2.5 w-[200px] lg:w-[250px] bg-black"/>
        </div>
    )
}

export default HangmanDrawing