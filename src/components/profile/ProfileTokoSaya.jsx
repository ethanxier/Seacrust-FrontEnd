import { useEffect, useState } from "react"
import NavbarProfile from "../layout/NavbarList"
import { BaseAPI } from "../../api/api"
import OtherButton from "../button/OtherButton"
import { Link } from "react-router-dom"
import navList from '../../data/profileNavList.json'

const ProfileTokoSaya = () => {
    const [toko, setToko] = useState([])
    const token = window.localStorage.getItem('token')

    const GetToko = () => {
        BaseAPI.get("/user/toko", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            console.log(res.data.data);
            const dataToko = res.data.data;
            setToko(dataToko)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        GetToko();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return(
        <div className="w-full h-full bg-white block sm:border sm:rounded-2xl">
            <NavbarProfile navList={navList}/>
            {toko.length === 0 ? (
                <div className="h-full flex flex-col justify-center items-center gap-3">
                    <div className="text-xl font-semibold text-gray-400">
                    ANDA BELUM MEMILIKI TOKO
                    </div>
                    <Link to={"/user/store/regis"} className="bg-palleteBlue px-4 py-2 rounded-lg text-white font-semibold">DAFTAR TOKO</Link>
                </div>
            ) : (
                <>
                    {toko.is_active ? (
                        // konten saat toko aktif
                        <div className="h-full flex justify-center items-center">
                            <div className="text-xl font-semibold text-gray-400">
                            Toko anda sudah aktif
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex justify-center items-center">
                            <div className="text-xl font-semibold text-gray-400">
                            Toko anda masih dalam verifikasi
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default ProfileTokoSaya