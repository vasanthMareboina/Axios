import React from 'react'

function Button1(props) {
    return (
        
            <div className="hButtonDiv">
                <a href="#" className="hButton">{props.children}</a>
            </div>
        
    )
}

export default Button1;