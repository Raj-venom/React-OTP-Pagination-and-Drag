import React, { useState } from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

function Table() {
    const data = [
        {
            id: '1',
            thumbnail: 'https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__',
            title: 'SQL Basics To Advanced Mastery Course',
            price: 0,
            status: 'published',
            startDate: '20 Jul 2024',
            endDate: '20 Oct 2024',
            validity: 120
        },
        {
            id: '2',
            thumbnail: 'https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__',
            title: '30 Days Of Javascript Challenge',
            price: 0,
            status: 'unpublished',
            startDate: '13 Jul 2024',
            endDate: '12 Aug 2024',
            validity: 33
        },
        {
            id: '3',
            thumbnail: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__',
            title: 'Interview Preparation With Javascript 2.0',
            price: 10000,
            status: 'published',
            startDate: '01 Sep 2024',
            endDate: '01 Dec 2024',
            validity: 120
        },
        {
            id: '4',
            thumbnail: 'https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__',
            title: 'Node.js and Express.js',
            price: 1800,
            status: 'published',
            startDate: '10 Jul 2024',
            endDate: '10 Oct 2024',
            validity: 120
        },
        {
            id: '5',
            thumbnail: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__',
            title: 'Database Management with MongoDB',
            price: 2200,
            status: 'unpublished',
            startDate: '25 Jul 2024',
            endDate: '25 Oct 2024',
            validity: 120
        },
        {
            id: '6',
            thumbnail: 'https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__',
            title: 'Full Stack Development Bootcamp',
            price: 3000,
            status: 'published',
            startDate: '05 Aug 2024',
            endDate: '05 Nov 2024',
            validity: 120
        },
        {
            id: '7',
            thumbnail: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__',
            title: 'Machine Learning Basics',
            price: 2500,
            status: 'unpublished',
            startDate: '15 Jul 2024',
            endDate: '15 Oct 2024',
            validity: 120
        },
        {
            id: '8',
            thumbnail: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__',
            title: 'Python Programming',
            price: 1200,
            status: 'published',
            startDate: '20 Jul 2024',
            endDate: '20 Oct 2024',
            validity: 120
        },
        {
            id: '9',
            thumbnail: 'https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__',
            title: 'Data Science with R',
            price: 2700,
            status: 'unpublished',
            startDate: '30 Jul 2024',
            endDate: '30 Oct 2024',
            validity: 120
        },
        {
            id: '10',
            thumbnail: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__',
            title: 'Introduction to Cybersecurity',
            price: 2300,
            status: 'published',
            startDate: '25 Aug 2024',
            endDate: '25 Nov 2024',
            validity: 120
        }
    ];

    const [batchesData, setBatchesData] = useState(data)
    const [input, setInput] = useState("")

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(3);

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = batchesData.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(batchesData.length / recordsPerPage);
    const numberes = [3, 5, 10, 15, 20];

    const isPrevDisabled = currentPage === 1;
    const isNextDisabled = currentPage === nPage;

    function prevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setPrevColor("#000000")
            setNextColor("#000000")
        } else {
            setPrevColor("#D6D6D6")
        }
    }

    function nextPage() {
        if (currentPage < nPage) {
            setCurrentPage(currentPage + 1);
            setNextColor("#000000")
            setPrevColor("#000000")
        } else {
            setNextColor("#D6D6D6")
        }

        if (currentPage > nPage) {
            setNextColor("#D6D6D6")

        }
    }

    function filterData() {

        if (input.trim() == "") {
            console.log("input val")
            setBatchesData(data)
            return
        }

        const filteredArray = batchesData.filter((item) => (
            item.title.toLowerCase().includes(input.trim().toLowerCase())
        ))

        setBatchesData(filteredArray)
    }

    function handileKeyDown(e) {
        if (e.key === 'Enter') {
            filterData();
        }
    }

    return (
        <div className='flex bg-[#E2BBE9]  flex-col justify-center items-center w-full min-h-screen relative'>
            <h2 className='text-center text-[65px] text-[#444B79]  font-[700] leading-[96.82px] absolute top-[-13px] drop-shadow-md '>Chai aur Code</h2>

            <div className=' flex flex-col  w-[1200px] min-h-[620px] pb-3 mt-16 mr-40 px-10 pt-6  rounded-[18px] bg-[#FFFFFF] drop-shadow-xl '>
                <div className=''>
                    <h2 className='text-[40px] font-[700] leading-[48.41px]'>Batches</h2>
                    <p className='text-[20px] font-[400] mt-1 leading-[24.2px] text-[#4b4747ee]'>Create learner’s batch and share information at the same time.</p>
                </div>

                <div className='mt-8'>
                    <input
                        onKeyDown={handileKeyDown}
                        onChange={(e) => setInput(e.target.value)}
                        type="text" placeholder='Search by Title (alt+k or cmd+k)'
                        className='bg-[#FFFFFF] px-4 text-[16px] font-[400] leading-[19.36px] border rounded-[4px] w-[332px] h-[43px] border-[#b8b5b5] ' />
                    <button onClick={filterData} className='bg-[#6C6BAF] text-[#FFFFFF] ml-2 w-[116px] h-[43px] rounded-[4px] text-[18px] font-[400] leading-[21.78px]'>Search</button>
                </div>

                <div className="container mt-8 mx-auto border-t-black border-l-black border-[1px] rounded-tl-[8px] rounded-tr-[8px] rounded-br-[0px] rounded-bl-[0px] ">
                    <table className="min-w-full h-full z-10 border-black overflow-hidden">
                        <thead className='bg-[#F2F2F2] w-[1126px] border-t-black  h-[68px]'>
                            <tr className='text-[16px] font-[700] leading-[19.36px]  text-[#4B4747]'>

                                <th className="py-2 px-4 border-[#7D7D7D] border-b border-r">Title</th>
                                <th className="py-2 px-4 border-[#7D7D7D] border-b border-r">Start Date</th>
                                <th className="py-2 px-4 border-[#7D7D7D] border-b border-r">End Date</th>
                                <th className="py-2 px-4 border-[#7D7D7D] border-b border-r">Price</th>
                                <th className="py-2 px-4 border-[#7D7D7D] border-b border-r">Validity/Expiry</th>
                                <th className="py-2 px-4 border-[#7D7D7D] border-b border-r">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((batch) => (
                                <tr key={batch.id}>
                                    <td className="py-2 px-4 flex gap-2 items-center  border-[#7D7D7D] border-b border-r">
                                        <img src={batch.thumbnail} alt={batch.title} className="w-24 h-auto" />
                                        {batch.title}
                                    </td>
                                    <td className="py-2 px-4 border-[#7D7D7D] border-b border-r">{batch.startDate}</td>
                                    <td className="py-2 px-4 border-[#7D7D7D] border-b border-r">{batch.endDate}</td>
                                    <td className="py-2 px-4 border-[#7D7D7D] border-b border-r">₹ {batch.price}</td>
                                    <td className="py-2 px-4 border-[#7D7D7D] border-b border-r">{batch.validity} days</td>
                                    <td className="py-2 px-4 border-[#7D7D7D] border-b border-r">

                                        <div className={`rounded-[4px] w-[82px] h-[27px]  ${batch.status == "published" ? "bg-[#DEFFDE]" : "bg-[#F3F3F3]"}  text-center px-12 border border-[#4ED04B] flex items-center justify-center`}>
                                            <p className='text-[14px] leading-[16.94px] font-[500]'>
                                                {batch.status}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex items-center gap-4 mt-4 pb-4 justify-end mr-6 '>
                    <p className='font-[400] text-[16px] leading-[19.36px] text-[#4B4747]'>Rows per page</p>

                    <select
                        className='w-[73px] bg-[#FFFFFF] h-[43px] rounded-[4px] border-[#BEBEBE] border'
                        value={recordsPerPage}
                        onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                    >
                        {numberes.map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>

                    <div className='flex'>
                        <MdArrowBackIos onClick={prevPage} size="30px" color={isPrevDisabled ? "#D6D6D6" : "#000000"} />
                        <MdArrowForwardIos onClick={nextPage} size="30px" color={isNextDisabled ? "#D6D6D6" : "#000000"} />
                    </div>
                </div>
            </div>
            <a href="https://chaicode.com/" target="_blank" rel="noopener noreferrer">
                <img className='absolute w-[120px] h-[125px] bottom-7  right-16' src="chai.png" alt="chai" />
            </a>

        </div>

    )
}

export default Table