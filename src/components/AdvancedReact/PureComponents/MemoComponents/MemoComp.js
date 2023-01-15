import React, { memo } from 'react'

function MemoComp({ name }) {
    console.log("-----Rendering Memo Component-----")
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default memo(MemoComp)
