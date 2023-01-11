import React, { Fragment } from 'react'

function Columns(props) {
    const players = ["Ronaldo", "Kaka"]

    const playerElement = players.map((player, index) => {
        return (
        <Fragment key={index}>
            <h1>Player name</h1>
            <td>{player}</td>
        </Fragment>
        )
    })

    return (
        <>
            {/* <td>Name</td>
            <td>Ashwin</td> */}
            {
                playerElement
            }
        </>
    )
}

export default Columns
