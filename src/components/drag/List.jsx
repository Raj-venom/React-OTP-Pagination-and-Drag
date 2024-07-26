import React from 'react'
import { MdOutlineDragIndicator } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Reorder, useDragControls } from "framer-motion"


function List({ id, title, price, type, img }) {

    const dragControls = useDragControls();


    // const id = 1
    // const title = "Interview preparation with JavaScript 2.0"
    // const price = "Rs. 9000/-"
    // const type = "Course"
    // const img = "https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__"

    return (

        <Reorder.Item dragListener={false} dragControls={dragControls}   >


            <div className='flex drop-shadow-xl bg-[#F7F7F7] w-[1025px] mt-2 h-[93px] rounded-[8px] justify-between px-5'>

                <div className='flex items-center '>
                    <MdOutlineDragIndicator className='cursor-pointer' onPointerDown={(event) => dragControls.start(event)} size="50px" color='#7F7F7F' />
                    <img src={`${img}`} className='w-[133px] h-[75px]  rounded-[8px]' alt="" />
                    <p className='text-[20px]  font-[500] leading-[24.2px]  text-[#000000] ml-4'>{title}</p>
                </div>

                <div className='flex items-center justify-between w-[200px] '>
                    <p className='text-[#000000] font-[400] text-[18px] leading-[21.78px] '>{price}</p>

                    <div className='rounded-[4px] w-[74px] h-[26px] bg-[#DBFFCE] border-[0.2px] flex items-center justify-center'>
                        <p className='text-[14px] leading-[16.94px] font-[400]'>
                            {type}
                        </p>
                    </div>
                    <HiOutlineDotsVertical size="25px" color='#000000' />
                </div>

            </div>
        </Reorder.Item>
    )
}

export default List