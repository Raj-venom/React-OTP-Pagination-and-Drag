import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/otp/Button'


function Otp({ otpLength = 4 }) {
    const [input, setInput] = useState(new Array(otpLength).fill(""))
    const [bgcolor, setBgcolor] = useState("bg-[#112D4E]")
    const [status, setStatus] = useState("Verify Account")
    const ref = useRef([]);

    useEffect(() => {
        ref.current[0].focus()
    }, [])

    const handleKeyDown = (e, index) => {
        const value = e.key
        const copyInput = [...input]

        if (value === " ") {
            return;
        }

        // console.log(value);

        if (value === "ArrowRight") {
            if (value !== "" && (index + 1 < input.length)) {
                ref.current[index + 1].focus()
                return
            }
        }

        if (value === "ArrowLeft") {
            if (value !== "" && (index - 1 >= 0)) {
                ref.current[index - 1].focus()
                return
            }
        }

        if (value === "Backspace") {
            copyInput[index] = ""
            setInput(copyInput);
            if (value !== "" && (index - 1 >= 0)) {
                ref.current[index - 1].focus()
                return
            }
        }
        if (isNaN(value)) return

        copyInput[index] = value
        setInput(copyInput);
        if (index + 1 < input.length) {
            ref.current[index + 1].focus()
        }

    }

    useEffect(() => {
        const value = input.join("")
        console.log(value)

        if(value.length !== 4) {
            setBgcolor("bg-[#112D4E]")
            setStatus("Verify Account")
            return
        }
        

        if (value === "1234") {
            setBgcolor("bg-[#23CF9B]")
            setStatus("Verified")
        } else {
            setBgcolor("bg-[#EB2D5B]")
            setStatus("Verification failed")
        }
    }, [input])
    console.log(bgcolor);

    return (
        <div className='flex bg-[#3F72AF]  flex-col justify-center items-center w-full h-screen relative'>
            <h2 className='text-center text-[75px] text-white  font-[700] leading-[96.82px] absolute top-2 '>Chai aur Code</h2>

            <div className=' flex flex-col justify-center items-center w-[756px] h-[514px] mt-16 rounded-[18px] bg-[#F9F7F7]'>
                <h2 className='font-[700] tracking-[-5%] text-[40px] leading-[52.08px]'>Mobile Phone Verification</h2>
                <p className=' mt-3 text-[#BFBFBF] text-[25px] font-[400] leading-[32.55px]'>Enter the 4-digit verification code that was sent</p>
                <p className=' text-[#BFBFBF] text-[25px] font-[400] leading-[32.55px]'>to your phone number.</p>

                <div className='mt-7 mb-4 gap-[18px] flex '>
                    {
                        input.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                value={value}
                                ref={(currentInput) => (ref.current[index] = currentInput)}
                                // onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className='bg-[#DBE2EF] w-[90px] h-[100px] rounded-[12px] text-[48px] font-[400] leading-[62.5px] tracking-[-4%] text-center' />
                        ))
                    }
                </div>

                <Button bgcolor={bgcolor} >{status}</Button>
                
                <p className='text-[#BFBFBF] mt-3 text-[25px] leading-[32.55px] tracking-[-4%] font-[400]'>Didn’t receive code?  <span className='text-[#112D4E]'>Resend</span>  </p>
            </div>
            <img className='absolute w-[125px] h-[125px] bottom-7 right-12' src="chai.png" alt="chai" />
        </div>

    )
}

export default Otp