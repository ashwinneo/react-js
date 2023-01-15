import React, { useState } from 'react'
import UseHookMouse from './UseHookMouse';

function UseMouseContainer() {
    const [display, setDisplay] = useState(true);
    
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            { display && <UseHookMouse/>}
        </div>
    )
}

export default UseMouseContainer
