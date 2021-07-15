import React from 'react'

const Scroll = (prorps) => {
    return (
        <div style={{overflowY: 'scroll', height: '800px'}}>
            {prorps.children}
        </div>
    )
}

export default Scroll