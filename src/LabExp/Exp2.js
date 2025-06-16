import React, { useState } from 'react'

export default function Exp2() {
    const [count, setcount] = useState(0)
  return (
    <div>
        <h1 className='count'>{count}</h1>
        <button onClick={()=>setcount(count+1)}>hgjlkl</button>
        </div>
  )
}
