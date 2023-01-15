import React, { useEffect, useState } from 'react'

function UseIntervalHookCounter() {
    const [count, setCount] = useState(0);

    // const tick = () => {
    //     setCount(count + 1)
    // };

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    };

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    // useEffect(() => {
    //     function doSomething() {
    //         console.log(someProp)
    //     }
    //     doSomething()
    //     const interval = setInterval(tick, 1000);

    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [someProp]); // Always define function inside useEffect if you want to call them inside useEffect so that even the props can be shared.

    return (
        <div>
            {count}
        </div>
    )
}

export default UseIntervalHookCounter
