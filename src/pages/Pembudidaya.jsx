import NavBar from "../components/Layout/NavBar"
import './Home.css'
import Footer from "../components/Layout/Footer"
import MapBox from "../components/Map/MapBox"
import CardProduct from "../components/Card/CardProduct"
import './Commerce.css'

const Pembudidaya = () => {
    return (
        <div className="wrapperMenuPage">
            <NavBar />
            <MapBox menu="Pembudidaya"/>
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

export default Pembudidaya