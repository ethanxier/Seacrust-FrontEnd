/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const CardProduct = ({data}) => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            const truncatedText = text.substr(0, maxLength)
            const lastSpaceIndex = truncatedText.lastIndexOf(' ')
            if (lastSpaceIndex !== -1) {
                return truncatedText.substr(0, lastSpaceIndex) + ' ...'
            }
        }
        return text
    }

    return (
        <Link to={`/product/detail/${data.id}`}>
            <div className="w-full sm:w-72 bg-white shadow-md p-2 sm:p-5 text-center m-auto sm:m-0 box-border rounded-lg h-52 sm:h-80 overflow-hidden flex flex-col">
                <img src={data.foto} className="w-full sm:w-full" />
                <div className="flex flex-col justify-between h-full">
                    <h1 className="text-left text-xs sm:text-base font-semibold mt-1 sm:mt-2 text-black">{truncateText(data.name, 52)}</h1>
                    <div className="text-palleteBlue text-left text-xs lg:text-xl">
                        {new Intl.NumberFormat('id-ID', { 
                            style: 'currency', 
                            currency: 'IDR', 
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0 }).format(data.harga)}
                    </div>
                    {/* <p className="text-left mt-2 descCard hidden sm:block text-gray-600 sm:text-sm">{data.deskripsi}</p> */}
                </div>
                <div className="flex w-full gap-2 justify-end">
                    <p className="text-gray-400 text-xs lg:text-sm font-light">{data.domisili_toko}</p>
                </div>
            </div>
        </Link>
    )
}

export default CardProduct