import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}
function InlineStyleSheet(props) {
    
    return (
        <div>
            {/* <h1 className={styles.success}></h1> */}
            <h1 className='error'>Error1</h1>
            <h1 style={heading}>Ashwin</h1>
        </div >
    )
}

export default InlineStyleSheet
