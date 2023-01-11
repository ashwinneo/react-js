import React from "react";

// function Greet() {
//     return <h1>Hello Ashwin</h1>
// } 

// const Greet = () => {
//     return <h1>Hello Ashwin</h1>
// };

// const Greet = (props) => {
//     return <h1>Hello {props.name} a.k.a {props.heroName}</h1>
// };

const FunctionalComponent = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            <p>{props.children}</p>
        </div>
    )
};

//named export
// export const Greet = () => <h1>Hello Ashwin</h1>
//import {Greet}

export default FunctionalComponent;
