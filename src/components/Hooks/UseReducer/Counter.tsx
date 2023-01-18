import React, {useReducer} from 'react'

// type ActionType = {
//     type: 'increment' | 'decrement' | 'reset',
//     payload?: number
// };

type ActionType = UpdateAction | ResetAction;

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterState = {
    count: number
}

const initialState = { count: 0 };

const reducer = (state: CounterState, action: ActionType) => {
    console.log("State", state)
    switch(action.type) {
        case 'increment': 
            return { count: state.count + action.payload }
        case 'decrement': 
        return { count: state.count - action.payload }
        case 'reset': 
            return initialState
        default:
            return state
    }
};

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);//count=currentState,dispatch=execute the methods of action

    return (
        <>
            Count - {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10})}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10})}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
        </>
    )
}

export default Counter
