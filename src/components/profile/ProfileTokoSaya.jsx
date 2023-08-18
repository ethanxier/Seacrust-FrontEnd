import { useEffect, useState } from "react"
import NavbarProfile from "../layout/NavbarList"
import { BaseAPI } from "../../api/api"
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
        <div className="w-full flex flex-col bg-white sm:border sm:rounded-2xl">
            <NavbarProfile navList={navList}/>
            {toko.length === 0 ? (
                <div className=" flex flex-col h-full justify-center items-center gap-3">
                    <div className="text-xl font-semibold text-gray-400">
                    ANDA BELUM MEMILIKI TOKO
                    </div>
                    <Link to={"/user/store/regis"} className="bg-palleteBlue px-4 py-2 rounded-lg text-white font-semibold">DAFTAR TOKO</Link>
                </div>
            ) : (
                <>
                    {toko.is_active ? (
                        <div className="w-full flex flex-col h-full">
                            <div className="w-full flex flex-row bg-palleteBlue p-4 text-xl font-semibold">
                                <div className="nama text-white flex-1">{toko.name}</div>
                                <div className="text-white text-sm text-right flex items-center">
                                    <Link to={"/user/store/add-product"}>+ tambah produk</Link>
                                </div>
                            </div> 
                            <div className="h-full flex-col p-5 flex gap-5">
                                {toko.produk != null ? (
                                    <>
                                        {toko.produk.map((list, index) => {
                                            return (
                                                <div key={index} className="flex flex-col p-3 border rounded-md gap-3 w-full h-fit box-border">
                                                    <div className="flex flex-row gap-2">
                                                        <div className="w-36 h-24 overflow-hidden">
                                                            <img src={list.foto} className="w-full" />
                                                        </div>
                                                        <div className="flex flex-col flex-1">
                                                            <div className="font-semibold text-lg">{list.name}</div>
                                                            <div className="text-md">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(list.harga)}</div>
                                                            <div className="h-full flex items-end">
                                                                {list.is_verified ? (
                                                                    <div className="text-sm text-green-500">
                                                                        Verified
                                                                    </div>
                                                                ) : (
                                                                    <div className="text-sm text-red-500">
                                                                        Unverified
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="border-t-2 text-sm text-palleteBlue pt-2">
                                                        <Link>Edit Produk</Link>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                ) : (
                                    <>
                                        <div className="h-full flex justify-center items-center">
                                            <div className="text-xl font-semibold text-gray-400">
                                            Belum ada produk
                                            </div>
                                        </div>
                                    </>
                                )}
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