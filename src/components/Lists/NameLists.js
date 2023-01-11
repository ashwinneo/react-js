import React from 'react'
// import Person from './Person';

function NameLists() {
    const names = ["Ronaldo", "Beckham", "Kaka", "Ronaldo"];
    const nameList = names.map((name,index) => <h1 key={index}>{index} {name}</h1>);

    // const persons = [
    //     {
    //         id: 1,
    //         name: "Ronaldo",
    //         team: "Al Nasser"
    //     },
    //     {
    //         id: 2,
    //         name: "Bruno Fernandes",
    //         team: "Man UTD"
    //     }
    // ];

    // const personList = persons.map((person) => {
    //     return (<h1>I'am {person.name} from {person.team} </h1>)
    // })
    // const personList = persons.map((person) => {
    //     return <Person key={person.id} person={person}/>
    // })
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
            {
                names.map(name => <h1>{name}</h1>)
            }*/}
            {
                nameList
            } 
            {/* {
                personList
            } */}
            {/* {
                personList
            } */}
        </div>
    )
}

export default NameLists
