import navList from '../../data/adminVerification.json'
import NavbarList from "../layout/NavbarList"
import { useEffect, useState } from 'react'
import { Base } from '../../api/api'
import PrimerButton from '../button/PrimerButton'
import iconStore from "/src/assets/ikon/storeIcon.svg"

const AdminVerifProduct = () => {
    const [listProduk, setlistProduk] = useState([])
    const token = window.localStorage.getItem('tokenA')

    const GetUnverifiedToko = () => {
        // window.localStorage.setItem("tokenA", '')
        Base.get("/admin/verif/produk", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            console.log(res.data.data);
            const dataProduk = res.data.data;
            setlistProduk(dataProduk)
        })
        .catch((err) => {
            console.log(err);
            window.localStorage.setItem("tokenA", '')
        })
    }
    
    const accHandler = (selectedID) => {
        Base.put(`/admin/verif/produk/${selectedID}`, null, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            console.log(res.data);
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
            // window.localStorage.setItem("tokenA", '')
        })
    }

    useEffect(() => {
        GetUnverifiedToko();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return(
        <div className="w-full bg-white sm:border sm:rounded-2xl">
            <NavbarList navList={navList}/>
            <div className="px-12 py-6 flex flex-col gap-6 justify-center items-center">
                {listProduk.length === 0 ? (
                    <div className=" flex flex-col justify-center items-center gap-3">
                        <div className="text-xl font-semibold text-gray-400 ">
                        belum ada produk
                        </div>
                    </div>
                ) : (
                    <>
                        {listProduk.map((list, index) => {
                            return (
                                <div key={index} className="flex flex-col w-full border-2 rounded-lg px-5 pb-5 pt-2 gap-3">
                                    <div className="text-lg font-semibold text-palleteBlue justify-center flex items-center pb-1 border-b">{list.kategori}</div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row gap-4">
                                            <div className="w-44 overflow-hidden">
                                                <img src={list.foto} className='w-full'/>
                                            </div>
                                            <div className="flex flex-col flex-1 gap-1">
                                                <div className="text-xl font-bold">
                                                    {list.name}
                                                </div>
                                                <div className="ttl">
                                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(list.harga)}
                                                </div>
                                                <div className="h-full flex items-end mb-1">
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
                                        <div className="overflow-x-auto">
                                            {list.deskripsi}
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-3 pt-3 border-t-2">
                                        <div className="flex flex-col w-full gap-1">
                                            <div className="flex flex-row gap-1 h-full items-center">
                                                <img src={iconStore} />
                                                <div className="font-semibold flex items-center">
                                                    {list.nama_toko}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-36 justify-center">
                                            <PrimerButton name={"verify"} handle={() => {accHandler(list.id)}} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
        </div>
    )
}

export default AdminVerifProduct