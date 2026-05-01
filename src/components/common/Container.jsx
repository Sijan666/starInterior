import React from 'react'

export default function Container({children , className}) {
    return (
        <div className={`${className} lg:w-330 px-3 lg:px-0 mx-auto`}>{children}</div>
    )
}
