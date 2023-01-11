import React from "react";

const Hello = () => {
    //JSX
    // return (
    //     <div>
    //         <h1>Hello Ashwin</h1>
    //     </div>
    // )
    //JSX

    // return React.createElement('div', null, 'h1', "Hello Ashwin");
    return React.createElement(
        'div', 
         {id: 'hello', className: 'dummyClass'}, 
         React.createElement('h1', null, "Hello Ashwin"));
};
export default Hello;