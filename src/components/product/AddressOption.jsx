/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import iconStore from "/src/assets/ikon/storeIcon.svg"
import AddAddress from "./AddAdress"
import PrimerButton from "../button/PrimerButton"
import { BaseAPI } from "../../api/api"


const AddressOption = ({ data, sendDataAlamat, }) => {
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(-1)
    const [listAlamat, setListAlamat] = useState([])
    const [addAddress, setAddAddress] = useState(false)
    const token = window.localStorage.getItem("token")

    const addAddressHandler = () => {
        setAddAddress(true)
    }

    const kembaliHandler = () => {
        setAddAddress(false)
    }

    const selectAlamatHandler = (selectedAlamat, index) => {
        sendDataAlamat(selectedAlamat);
        setSelectedAddressIndex(index);
      }

    const getAllAlamat = () => {
        BaseAPI.get("user/address/get", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            setListAlamat(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getAllAlamat()
    }, [])

    return (
        <div className="bg-white flex flex-row p-6 rounded-md border gap-8">
            {addAddress && (<>
                <AddAddress goBack={kembaliHandler}/>
            </>)}
            <div className="h-32 w-52 overflow-hidden">
                <img className="w-full" src={data.foto} alt="product" />
            </div>
            <div className="flex flex-col w-96 p-1 gap-1">
                <div className="text-palleteBlue text-2xl font-bold">{data.name}</div>
                <div className="text-xl font-bold">{new Intl.NumberFormat('id-ID', { 
                            style: 'currency', 
                            currency: 'IDR', 
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0 }).format(data.harga)}</div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-center py-3 text-palleteBlue font-bold border-b-2 border-palleteBlue">pilih alamat tujuan</div>
                    {listAlamat ? (
                        <div className="w-full flex flex-col gap-3 py-1">
                            {listAlamat.map((list, index) => {
                            return (
                                <button key={index} onClick={() => selectAlamatHandler(list, index)}
                                className={`flex flex-col w-full border rounded-md p-3 text-left ${
                                  selectedAddressIndex === index
                                    ? "bg-palleteBlue text-white"
                                    : "hover:bg-gray-100"
                                }`} >
                                    <div className="flex w-full text-base font-semibold">{list.nama_penerima}</div>
                                    <div className="flex w-full text-sm">{list.nomor_hp}</div>
                                    <div className="flex w-full text-sm">{list.alamat}</div>
                                    <div className="flex text-sm">{list.desa && (
                                        <>{list.desa}, </>
                                    )}{list.kecamatan}, {list.kota}, {list.provinsi}, {list.kode_pos}</div>
                                </button>
                            )
                        })}
                        </div>
                    ) : (
                        <div className=" flex flex-col h-full justify-center items-center gap-5 py-8">
                            <div className="text-base font-semibold text-gray-400">
                            ANDA BELUM MEMILIKI ALAMAT
                            </div>
                        </div>
                    )}
                    <PrimerButton handle={addAddressHandler} name={"TAMBAH ALAMAT"}/>
                </div>
                <div className="flex flex-row gap-1 h-full items-center py-4 border-y-2 mt-4">
                    <img src={iconStore} />
                    <div className="font-medium flex items-center flex-1">
                        {data.nama_toko}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressOption