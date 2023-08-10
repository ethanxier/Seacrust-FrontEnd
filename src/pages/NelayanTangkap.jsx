import NavBar from "../components/Layout/NavBar"
import Footer from "../components/Layout/Footer"
import MapBox from "../components/Map/MapBox"
import CardProduct from "../components/Card/CardProduct"
import './Commerce.css'

const NelayanTangkap = () => {
    return (
        <div className="wrapperMenuPage">
            <NavBar />
            <MapBox menu="Nelayan Tangkap"/>
            <div className="catalog">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
            <Footer />
        </div>
    )
}

export default NelayanTangkap