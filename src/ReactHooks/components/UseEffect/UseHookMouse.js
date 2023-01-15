import React, { useState, useEffect } from 'react'

function UseHookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('Component unmounted code');
            window.removeEventListener('mousemove', logMousePosition);
        }//mimicking componentDidUnmount() User for removing timer, subscribtion etc
    }, []) //mimicking componentDidMount()

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default UseHookMouse
