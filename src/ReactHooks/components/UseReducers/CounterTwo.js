import React, { useReducer } from 'react'
import '../../myStyle.css'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    console.log("State", state)
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
};

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState);//count=currentState,dispatch=execute the methods of action

    return (
        <div>
            <div>
                <lable>First Counter</lable> <span> - {count.firstCounter} </span>
                <label>Second Counter</label> <span> - {count.secondCounter} </span>
            </div>
            <button className="button-85" onClick={() => dispatch({ type: 'increment', value: 1 })}>
                Increment
            </button>
            <button className="button-85" onClick={() => dispatch({ type: 'decrement', value: 1 })}>
                Decrement
            </button>
            <button className="button-85" onClick={() => dispatch({ type: 'increment', value: 5 })}>
                Increment 5
            </button>
            <button className="button-85" onClick={() => dispatch({ type: 'decrement', value: 5 })}>
                Decrement 5
            </button>
            <button className="button-85" onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
            <div>
                <button className="button-85" onClick={() => dispatch({ type: 'increment2', value: 1 })}>
                    Increment Counter 2
                </button>
                <button className="button-85" onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
                    Decrement Counter 2
                </button>
            </div>
        </div>
    )
}

export default CounterTwo
