import React from 'react'

export default function Button({btnText , className}) {
    return (
        <button className={`${className} lg:px-5 lg:py-4 px-4 py-3.25 bg-btn text-white text-base font-bold`}>{btnText}</button>
    )
}
