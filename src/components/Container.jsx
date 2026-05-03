import React from 'react'

export default function Container({children , className}) {
    return (
        <div className={`${className} lg:w-325 px-4 lg:px-0 mx-auto`}>{children}</div>
    )
}
