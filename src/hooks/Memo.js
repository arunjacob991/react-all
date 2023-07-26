import React, {memo, useState, useMemo, useCallback} from 'react';



const SwitchColor = ({params}) => {

    console.log(params)

    return (
        <>
            <div 
                style = {{margin: 75, width: 75, height:75, backgroundColor: params.color}} 
            >
                Color
            </div>
        </>
    )
}

const MemoedSwitchColor = memo(SwitchColor)

const Memo = () => {

        const [renderIndex, setRenderIndex] = useState(0)
        const [color, setColor] = useState("red")

        console.log(`App rendered ${renderIndex}`)

        const params = useMemo(() => ({color}), [color])

        const handleClick = useCallback(()=> {}, [])

    return(
            <>
                <button onClick = {() => setRenderIndex(renderIndex + 1)}>
                    App Render
                </button>
                <button onClick = {() => setColor(color === "red" ? "blue" : "red")}>
                    Change Color
                </button>
                <MemoedSwitchColor params = {params} onClick = {handleClick} />
            </>
    )
}

export default Memo;