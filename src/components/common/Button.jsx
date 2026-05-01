import React from 'react'

export default function Button({btnText , className}) {
    return (
        <button className={`${className} customBtn `}><span>{btnText}</span></button>
    )
}
