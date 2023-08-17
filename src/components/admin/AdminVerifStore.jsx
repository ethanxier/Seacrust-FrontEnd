import navList from '../../data/adminVerification.json'
import NavbarList from "../layout/NavbarList"
import { useEffect, useState } from 'react'
import { Base } from '../../api/api'
import PrimerButton from '../button/PrimerButton'

const AdminVerifStore = () => {
    const [listToko, setlistToko] = useState([])
    const token = window.localStorage.getItem('tokenA')

    const GetUnverifiedToko = () => {
        console.log(token)
        // window.localStorage.setItem("tokenA", '')
        Base.get("/admin/verif/toko", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            console.log(res.data.data);
            const dataToko = res.data.data;
            setlistToko(dataToko)
        })
        .catch((err) => {
            console.log(err);
            // window.localStorage.setItem("tokenA", '')
        })
    }
    
    const accHandler = (selectedID) => {
        Base.put(`/admin/verif/toko/${selectedID}`, null, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            console.log(res.data);
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
            <div className="px-12 py-6 flex flex-col sm:flex-row gap-6 justify-center items-center">
                {listToko.length === 0 ? (
                    <div className=" flex flex-col justify-center items-center gap-3">
                        <div className="text-xl font-semibold text-gray-400 ">
                        belum ada request
                        </div>
                    </div>
                ) : (
                    <>
                        {listToko.map((list, index) => {
                            return (
                                <div key={index} className="flex flex-col w-full border rounded-lg p-5">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row gap-4">
                                            <div className="w-44 overflow-hidden">
                                                <img src={list.user_foto} className='w-full'/>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="text-xl font-bold">
                                                    {list.user_fullname}
                                                </div>
                                                <div className="ttl">
                                                    {list.user_tanggallahir}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bbot">
                                            {list.user_deskripsi}
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-3 pt-3 border-t-2">
                                        <div className="flex flex-col w-full gap-1">
                                            <div className="flex flex-row">
                                                <div className="logo"></div>
                                                <div className="font-semibold">
                                                    {list.nama_toko}
                                                </div>
                                            </div>
                                            <div className="text-sm">
                                                {list.alamat_toko}
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-36">
                                            <PrimerButton name={"accept"} handle={() => {accHandler(list.id_toko)}} />
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

export default AdminVerifStore