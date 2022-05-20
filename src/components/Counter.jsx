import React, { useState } from 'react'
import styles from "./styles.module.css"

function Counter(props) {
    const[count,setcount]=useState(props.data)
   
   
   
    
    
    
  return (
    <>
        <h1 className={count%2===0?styles.green:styles.red}>count:{count}</h1>
        <button onClick={()=>setcount(count+1)} >INCREMENT</button>
        <button onClick={()=>
        {
        if(count>0)
        {setcount(count-1)}
            }}>
                DECREMENT</button>
        <button onClick={()=>setcount(count*2)}>DOUBLE</button>
    </>
  )
}

export default Counter;