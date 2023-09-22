/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import PrimerButton from "../button/PrimerButton"
import FakeButton from "../button/FakeButton"

const CardSummaryCheckout = ({ data }) => {
    const [quantity, setQuantity] = useState(data.quantity)
    const [ongkir, setOngkir] = useState(0)
    const biayaOperasional = 2000

    const buyHandler = () => {
        console.log(`sudah beli ${data.id}`)
    }

    const plusHandler = () => {
        if (quantity < data.stok) {
            setQuantity(quantity + 1)
        }
    }

    const minHandler = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const checkOngkir = (alamat) => {
        setOngkir(25000)
    }

    useEffect(() => {
        console.log("alamat")
        console.log(data.alamat_user)
        setQuantity(data.quantity)
        checkOngkir(data.alamat)
    }, [data.quantity, data.alamat])

    return (
        <div className="bg-white border w-auto gap-3 p-3 flex flex-col rounded-lg h-fit">
            <div className="text-lg font-bold border-b-2 pb-2 justify-center flex">Checkout</div>
            <div className="flex flex-col p-3 gap-3">
                <div className="flex flex-row w-full gap-1 justify-between">
                    <div className="text-gray-400">Total Harga Barang</div>
                    <div className="font-semibold">{new Intl.NumberFormat('id-ID', { 
                            style: 'currency', 
                            currency: 'IDR', 
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0 }).format(data.harga*quantity)}</div>
                </div>
                <div className="flex flex-row w-full gap-1 justify-between">
                    <div className="text-gray-400">Biaya Operasional</div>
                    <div className="font-semibold">{new Intl.NumberFormat('id-ID', { 
                            style: 'currency', 
                            currency: 'IDR', 
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0 }).format(biayaOperasional)}</div>
                </div>
                <div className="flex flex-row w-full gap-1 justify-between">
                    <div className="text-gray-400">Ongkos Pengiriman</div>
                    <div className="font-semibold">{new Intl.NumberFormat('id-ID', { 
                            style: 'currency', 
                            currency: 'IDR', 
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0 }).format(ongkir)}</div>
                </div>
                <div className="flex flex-row justify-between px-14 w-64">
                    <button className="text-palleteBlue border-palleteBlue w-7 h-7 border-2 items-center justify-center flex rounded-sm font-semibold" onClick={minHandler}>-</button>
                    <div className="font-semibold">{quantity}</div>
                    <button className="text-palleteBlue border-palleteBlue w-7 h-7 border-2 items-center justify-center flex rounded-sm font-semibold" onClick={plusHandler}>+</button>
                </div>
                <div className="flex flex-row w-full gap-1 text-sm">
                    <div className="sisa">Sisa Produk</div>
                    <div className="text-palleteBlue font-semibold">{data.stok}</div>
                </div>
                {data.alamat_user ? (
                    <PrimerButton name={"Beli"} handle={buyHandler} />
                ) : (
                    <FakeButton name={"Beli"}/>
                )}
            </div>
        </div>
    )
}

export default CardSummaryCheckout