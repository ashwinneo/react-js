import React, { useState } from 'react'

function ClassCounter() {

    const [count, setCount] = useState(0); //Accepts argument initial argument of state and returns current state and method to update state

    return (
        <div>
            <button onClick={() => setCount(count + 1) }>Click {count}</button>
        </div>
    )
}

export default ClassCounter
