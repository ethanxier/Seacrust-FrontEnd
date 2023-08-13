import NavBar from "../../components/Layout/NavBar"
import Footer from "../../components/Layout/Footer"
import MapBox from "../../components/Map/MapBox"
import CardProduct from "../../components/Card/CardProduct"
import { useParams } from "react-router"

const Product = () => {
    const { category } = useParams()

    return (
        <div className="flex flex-col bg-slate-100 sm:bg-BGtoTop bg-fixed">
            <NavBar />
            <MapBox menu={category.charAt(0).toUpperCase() + category.slice(1)} />
            <div className="flex flex-wrap justify-center sm:gap-5 p-2 sm:p-5 box-border">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
            <Footer />
        </div>
    )
}

export default Product