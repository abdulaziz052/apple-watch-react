import React from 'react'

function Btns({children}) {
    return (
        <div>

            <a href="#" className="main-link">
                {children}
            </a>
        </div>
    )
}

export default Btns