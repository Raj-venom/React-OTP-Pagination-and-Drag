import React from 'react'

function Button({
    children,
    type = "button",
    bgcolor = " bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
       <button  className='bg-[#112D4E] rounded-[8px] font-[400] text-[25px]  w-[417px] h-[64px] text-white'>
        {children}
       </button>
    )
}

export default Button