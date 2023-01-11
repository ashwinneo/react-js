import React from 'react'

function ChildComponent(props) {

    function clickHandler() {
        props.greetHandler('child');
    }
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            <button onClick={() => clickHandler()}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
