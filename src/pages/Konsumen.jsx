import NavBar from "../components/Layout/NavBar"
import './Home.css'
import Footer from "../components/Layout/Footer"
import MapBox from "../components/Map/MapBox"
import CardProduct from "../components/Card/CardProduct"
import './Commerce.css'

const Konsumen = () => {
    return (
        <div className="wrapperMenuPage">
            <NavBar />
            <MapBox menu="Konsumen" />
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

export default Konsumen