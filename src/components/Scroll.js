import React from 'react'

//props, state, children
/* scroll is not a self rendering state, it is a wrapper around another component so it needs to render the wrapped components */
const Scroll = (props) =>{
    return(
        <div style={{overflow: 'scroll', border: '3px solid white', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;