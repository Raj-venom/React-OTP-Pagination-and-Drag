import React from 'react'

function Button({
    children,
    type = "button",
    bgcolor = " bg-[#112D4E]",
    className = "",
    ...props
}) {
    return (
        <button
            className={`rounded-[8px] font-[400] text-[25px]  w-[417px] h-[64px] text-white ${className} ${bgcolor}`} {...props}
        >
            {children}
        </button>
    )
}

export default Button