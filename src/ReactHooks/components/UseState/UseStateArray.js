import React, { useState } from 'react'

function HookCounter4() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 1000) + 1
        }])

        console.log(JSON.stringify(items, null, 2))
    }

    const renderList = items.map(item => {
       return <li key={item.id}>{item.value}</li>
    });

    return (
        <div>
            <button onClick={addItem}>Add</button>
            <ul>
                {
                    renderList.length > 0 ? renderList : "There are No items"
                }
            </ul>
        </div>
    )
}

export default HookCounter4
