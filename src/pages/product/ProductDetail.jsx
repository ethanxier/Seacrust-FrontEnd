import { useParams } from "react-router"
import NavBar from "../../components/Layout/NavBar"
import CardCheckout from "../../components/product/CardCheckout"
import DetailsSection from "../../components/product/DetailsSection"
import { useEffect, useState } from "react"
import { BaseAPI } from "../../api/api"

const ProductDetail = () => {
    const { id } = useParams()

    const [data, setData] = useState({})
    const token = window.localStorage.getItem("token")

    const getData = () => {
        BaseAPI.get(`/produk/detail/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            const dp = res.data.data
            setData(dp)
            console.log(dp)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, token])

    return (
        <div className="w-full min-h-screen flex flex-col bg-BGGrey bg-fixed">
            <NavBar />
            <div className="gap-0 sm:gap-10 w-full flex flex-col sm:mt-28 justify-center sm:px-64 sm:flex-row box-border">
                <DetailsSection data={data}/>
                <CardCheckout data={data}/>
            </div>
        </div>
    )
}

export default ProductDetail