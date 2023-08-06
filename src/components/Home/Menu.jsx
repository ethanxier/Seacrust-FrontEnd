import gambar1 from "/src/assets/menu/menu1.svg"
import gambar2 from "/src/assets/menu/menu2.svg"
import gambar3 from "/src/assets/menu/menu3.svg"
import gambar4 from "/src/assets/menu/menu4.svg"
import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return (
        <div className="menuBox">
            <div className="squareMenu">
                <Link to="/konsumen"><div className="gambar">
                    <img src={gambar1} />
                </div></Link>
                <div className="titleMenu">Konsumen</div>
            </div>
            <div className="squareMenu">
                <Link to="/tengkulak"><div className="gambar">
                        <img src={gambar2} />
                </div></Link>
                <div className="titleMenu">Tengkulak</div>
            </div>
            <div className="squareMenu">
                <Link to="/pembudidaya">
                <div className="gambar">
                    <img src={gambar3} />
                </div></Link>
                <div className="titleMenu">Pembudidaya</div>
            </div>
            <div className="squareMenu">
                <Link to="/nelayan-tangkap"><div className="gambar">
                    <img src={gambar4} />
                </div></Link>
                <div className="titleMenu">Nelayan Tangkap</div>
            </div>
        </div>
    )
}

export default Menu