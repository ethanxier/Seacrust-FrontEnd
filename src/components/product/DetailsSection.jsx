/* eslint-disable react/prop-types */
import iconStore from "/src/assets/ikon/storeIcon.svg"


const DetailsSection = ({ data }) => {

    return (
        <div className="bg-white flex flex-row p-6 rounded-md border gap-8">
            <div className="h-64 w-96 overflow-hidden">
                <img className="w-full" src={data.foto} alt="product" />
            </div>
            <div className="flex flex-col w-96 p-1 gap-1">
                <div className="text-palleteBlue text-2xl font-bold">{data.name}</div>
                <div className="text-2xl font-bold">{new Intl.NumberFormat('id-ID', { 
                            style: 'currency', 
                            currency: 'IDR', 
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0 }).format(data.harga)}</div>
                <div className="terjual"><span className="font-medium">{data.terjual}</span> terjual</div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-center py-3 text-palleteBlue font-bold border-b-2 border-palleteBlue">deskripsi</div>
                    <div className="font-medium">{data.deskripsi}</div>
                </div>
                <div className="flex flex-row gap-1 h-full items-center py-4 border-y-2 mt-4">
                    <img src={iconStore} />
                    <div className="font-medium flex items-center flex-1">
                        {data.nama_toko}
                    </div>
                    <div className="font-semibold hover:font-bold hover:cursor-pointer justify-end flex">kunjungi toko</div>
                </div>
            </div>
        </div>
    )
}

export default DetailsSection