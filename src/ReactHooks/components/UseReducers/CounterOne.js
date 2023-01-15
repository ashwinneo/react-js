import React, {useReducer} from 'react'

const initialState = 0;
const reducer = (state, action) => {
    console.log("State", state)
    switch(action) {
        case 'increment': 
            return state + 1
        case 'decrement': 
            return state - 1
        case 'reset': 
            return initialState
        default:
            return state
    }
};

function CounterOne() {

    const [count, dispatch] = useReducer(reducer, initialState);//count=currentState,dispatch=execute the methods of action

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
