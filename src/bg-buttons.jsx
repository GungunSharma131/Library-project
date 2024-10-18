import { useState } from 'react'

function Counter(){
    const [bgColor,setbgColor] = useState('white')
    const [textcolor,setTextColor] = useState('black')




    return(
        <>
        
        
        <div className='bg-color1' style={{backgroundColor:bgColor}}>
            <h1 style={{color:textcolor}}>Change Bgcolor</h1>
            <button onClick={() =>  {setbgColor("Black"); setTextColor("white")}}>Black</button>
            <button onClick={() =>  {setbgColor ("Red"); setTextColor("black")}}>Red</button>
            <button onClick={() =>  {setbgColor ("blue");setTextColor ("red")}}>Blue</button>
            <button onClick={() =>  {setbgColor ("Orange"); setTextColor("green")}}>Orange</button>
            <button onClick={() =>  {setbgColor ("yellow"); setTextColor("black")}}>Yellow</button>
            <button onClick={() =>  {setbgColor ("Green"); setTextColor ("red")}}>Green</button>
            <button onClick={() =>  {setbgColor ("pink"); setTextColor ("red")}}>Pink</button>
            
        </div>

        </>
    )
}
export default Counter