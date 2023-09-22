import NavBar from "../../components/Layout/NavBar"
import { useEffect, useState } from "react"
import { BaseAPI } from "../../api/api"
import AddressOption from "../../components/product/AddressOption"
import CardSummaryCheckout from "../../components/product/CardSummaryCheckout"

const ProductCheckout = () => {
    const [data, setData] = useState({})
    const token = window.localStorage.getItem("token")

    const getData = () => {
        BaseAPI.get(`/produk/direct-cart`, {
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
    }, [token])

    const addDataAddress = (dataAlamat) => {
        const newData = { ...data };
        newData.alamat_user = dataAlamat;
        setData(newData);
    }

    return (
        <div className="w-full min-h-screen flex flex-col bg-BGGrey bg-fixed">
            <NavBar />
            <div className="gap-0 sm:gap-10 w-full flex flex-col sm:mt-28 justify-center sm:px-64 sm:flex-row box-border">
                <AddressOption data={data} sendDataAlamat={addDataAddress}/>
                <CardSummaryCheckout data={data}/>
            </div>
        </div>
    )
}

export default ProductCheckout