import NavBar from "../components/Layout/NavBar"
import Menu from "../components/Home/Menu"
import Info from "../components/Home/Info"
import './Home.css'
import Footer from "../components/Layout/Footer"

const Home = () => {
    return (
        <div className="wrapper">
            <NavBar />
            <Menu />
            <Info />
            <Footer />
        </div>
    )
}

export default Home