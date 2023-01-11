import React from 'react'

function Person({person}) {
  return (
    <div>
      <h1>I'am {person.name} from {person.team} </h1>
    </div>
  )
}

export default Person
