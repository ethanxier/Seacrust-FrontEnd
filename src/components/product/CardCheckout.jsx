/* eslint-disable react/prop-types */
import { useState } from "react"
import PrimerButton from "../button/PrimerButton"
import { BaseAPI } from "../../api/api"
import { useNavigate } from "react-router"

const CardCheckout = ({ data }) => {
    const token = window.localStorage.getItem("token")
    const nav = useNavigate()

    const [quantity, setQuantity] = useState(1)

    const buyHandler = () => {
        BaseAPI.put("/produk/direct-cart", {
            product_id: data.id,
            quantity: quantity
        }, {
            headers: { Authorization: `Bearer ${token}` },
          })
        .then((res) => {
            console.log(res.data)
            nav("/product/checkout")
        })
        .catch((err) => {
            console.log(err)
        })
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

    return (
        <div className="bg-white border w-auto gap-3 p-3 flex flex-col rounded-lg h-fit">
            <div className="text-lg font-bold border-b-2 pb-2 justify-center flex">Checkout</div>
            <div className="flex flex-col p-3 gap-3">
                <div className="flex flex-row w-full gap-1 justify-between">
                    <div className="text-gray-400">Total</div>
                    <div className="font-semibold">{new Intl.NumberFormat('id-ID', { 
                            style: 'currency', 
                            currency: 'IDR', 
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0 }).format(data.harga*quantity)}</div>
                </div>
                <div className="flex flex-row justify-between px-7 w-48">
                    <button className="text-palleteBlue border-palleteBlue w-7 h-7 border-2 items-center justify-center flex rounded-sm font-semibold" onClick={minHandler}>-</button>
                    <div className="font-semibold">{quantity}</div>
                    <button className="text-palleteBlue border-palleteBlue w-7 h-7 border-2 items-center justify-center flex rounded-sm font-semibold" onClick={plusHandler}>+</button>
                </div>
                <div className="flex flex-row w-full gap-1 text-sm">
                    <div className="sisa">Sisa Produk</div>
                    <div className="text-palleteBlue font-semibold">{data.stok}</div>
                </div>
                <PrimerButton name={"Beli"} handle={buyHandler} />
            </div>
        </div>
    )
}

export default CardCheckout