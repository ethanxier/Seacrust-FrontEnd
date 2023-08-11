import gambar1 from "/src/assets/menu/menu1.svg"
import gambar2 from "/src/assets/menu/menu2.svg"
import gambar3 from "/src/assets/menu/menu3.svg"
import gambar4 from "/src/assets/menu/menu4.svg"
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="flex py-37 px-50 pt-14 md:pt-24 justify-center items-center gap-62 self-stretch bg-palleteBlue shadow-inner w-full">
            <div className="squareMenu">
                <Link to="/konsumen"><div className="gambar">
                    <img className="hover:mb-5 duration-300 hover:drop-shadow-xl" src={gambar1} />
                </div></Link>
                <div className="text-white mt-1 sm:mt-3 text-center text-xxs md:text-lg w-full">Konsumen</div>
            </div>
            <div className="squareMenu">
                <Link  to="/tengkulak"><div className="gambar">
                    <img className="hover:mb-5 duration-300 hover:drop-shadow-xl" src={gambar2} />
                </div></Link>
                <div className="text-white mt-1 sm:mt-3 text-center text-xxs md:text-lg w-full">Tengkulak</div>
            </div>
            <div className="squareMenu">
                <Link  to="/pembudidaya">
                <div className="gambar">
                    <img className="hover:mb-5 duration-300 hover:drop-shadow-xl" src={gambar3} />
                </div></Link>
                <div className="text-white mt-1 sm:mt-3 text-center text-xxs md:text-lg w-full">Pembudidaya</div>
            </div>
            <div className="squareMenu">
                <Link  to="/nelayan-tangkap"><div className="gambar">
                    <img className="hover:mb-5 duration-300 hover:drop-shadow-xl" src={gambar4} />
                </div></Link>
                <div className="text-white mt-1 sm:mt-3 text-center text-xxs md:text-lg w-full">Nelayan Tangkap</div>
            </div>
        </div>
    )
}

export default Menu