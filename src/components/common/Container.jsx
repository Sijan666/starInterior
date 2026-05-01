import React from 'react'

export default function Container({children , className}) {
    return (
        <div className={`${className} w-290 px-3 lg:px-0 mx-auto`}>{children}</div>
    )
}
