import React, { forwardRef } from 'react'

// function ForwardRefsInput(props) {

//   return (
//     <div>
//       <input type='text' />
//     </div>
//   )
// }

const ForwardRefsInput = forwardRef((props, ref) => {
  return (
        <div>
          <input type='text' ref={ref} />
        </div>
  )
})

export default ForwardRefsInput
