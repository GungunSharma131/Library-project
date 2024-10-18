import { useState } from 'react'

function BgColor(){
    const [Count, setCount] = useState(0)
    const [color, setColor] = useState("white");
    const [textcolor, setTextColor] = useState("black");

    return(
        <>
        <button onClick={() => setCount((Count) => Count + 1)}>
            Count is{Count}
        </button>
        
    <div className='bg-change'  style={{backgroundColor:color}}>
        <h2 style={{color:textcolor}}>Hello react</h2>
        <button onClick={() => {setColor("Red"); setTextColor("white")}} >Red</button>
        <button onClick={() => {setColor("black"); setTextColor("white")}} >Black</button>
        <button onClick={() => {setColor("yellow");setTextColor("Orange")}}>yellow</button>
        <button onClick={() => {setColor("blue");setTextColor("green")}}>blue</button>
        <button onClick={() => {setColor("green");setTextColor("white")}}>green</button>
    </div>
    </>
    )
    
}

export default BgColor