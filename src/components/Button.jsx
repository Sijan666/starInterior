import React from 'react'

export default function Button({ btnText, className, leftIcon, rightIcon }) {
    return (
        <button className={`${className} customBtn flex items-center gap-2`}>
            {leftIcon && <span className="icon-left">{leftIcon}</span>}
            <span>{btnText}</span>
            {rightIcon && <span className="icon-right">{rightIcon}</span>}
        </button>
    )
}