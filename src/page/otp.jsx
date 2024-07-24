import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/otp/Button'


function Otp({ otpLength = 4 }) {
    
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
                                onChange={(e) => handleChange(e, index)}
                                className='bg-[#DBE2EF] w-[90px] h-[100px] rounded-[12px] text-[48px] font-[400] leading-[62.5px] tracking-[-4%] text-center' />
                        ))
                    }
                </div>

                <Button >Verify Account</Button>
                <p className='text-[#BFBFBF] mt-3 text-[25px] leading-[32.55px] tracking-[-4%] font-[400]'>Didn’t receive code?  <span className='text-[#112D4E]'>Resend</span>  </p>
            </div>
        </div>

    )
}

export default Otp