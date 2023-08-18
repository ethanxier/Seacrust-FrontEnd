/* eslint-disable react-hooks/exhaustive-deps */
import { BaseAPI } from "../../api/api";
import { useRef, useState } from "react";
import InputProfile from "../bar/InputProfile";
import SubmitButton from "../button/SubmitButton";
import { useNavigate  } from "react-router";
import OtherButton from "../button/OtherButton";
import InputDropDown from "../bar/InputDropDown";
import listKategori from "../../data/categories.json"

const ProfileTambahProduk = () => {
    const nav = useNavigate()

    const [namaProduk, setnamaProduk] = useState('');
    const [harga, setharga] = useState(0);
    const [stok, setstok] = useState(0);
    const [kategori, setkategori] = useState('');
    const [deskripsi, setdeskripsi] = useState('');
    const fileFoto = useRef(null);
    const [fotoProduk, setfotoProduk] = useState('');

    const token = window.localStorage.getItem('token')

    const tambahHandler = () => {
        const formData = new FormData();
        formData.append('nama_produk', namaProduk);
        formData.append('harga', harga);
        formData.append('stok', stok);
        formData.append('kategori', kategori);
        formData.append('deskripsi', deskripsi);
        formData.append('foto_produk', fileFoto.current.files[0]);
    
        BaseAPI.post("/user/toko/create-product", formData, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            console.log(res.data);
            nav('/user/store');
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setfotoProduk(URL.createObjectURL(selectedFile));
            const formData = new FormData();
            formData.append('foto_produk', selectedFile);

        }
    };

    return(
        <>
            <div className="flex flex-row w-full bg-white sm:border sm:rounded-2xl p-5">
                <div className="p-10 flex flex-col sm:flex-col gap-6">
                    <div className="sm:p-7 w-auto sm:w-96 bg-gray-100 overflow-hidden sm:rounded-lg">
                        <img src={fotoProduk} className='rounded-sm h-24 sm:h-auto w-full'/>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileFoto}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="pb-3 px-7">
                        <div className="text-red-600 text-xs">
                        *maks 5mb
                        </div>
                        <OtherButton name="pilih foto" handle={() => fileFoto.current.click()}/>
                    </div>
                </div>
                <div className="w-full sm:w-full flex flex-col gap-5 px-5">
                    <InputProfile 
                        textLabel={"Nama Produk"}
                        id={"namaProduk"}
                        holder="-"
                        text={namaProduk}
                        handleChange={(e) => {
                            setnamaProduk(e.target.value);
                        }}
                    />
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-col w-full">
                            <InputProfile 
                                type="number"
                                textLabel={"Harga"}
                                id={"harga"}
                                holder="0"
                                text={harga > 0 ? harga : ""}
                                handleChange={(e) => {
                                    if (e.target.value >= 0) {
                                        setharga(e.target.value)
                                    } else {
                                        setharga(0)
                                    }
                                }}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <InputProfile 
                                type="number"
                                textLabel={"Stok"}
                                id={"stok"}
                                holder="0"
                                text={stok > 0 ? stok : ""}
                                handleChange={(e) => {
                                    if (e.target.value >= 0) {
                                        setstok(e.target.value)
                                    } else {
                                        setstok(0)
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <InputDropDown
                        required
                        textLabel={"Kategori"}
                        id={"kategori"}
                        // text={kota[2]}
                        options={[{ id: '-1', name: '' }, ...listKategori]}
                        handleChange={(e) => {
                            if (e.target.value.split("#")[0] >= 0) {
                                setkategori(e.target.value.split("#")[0])
                            }
                        }}
                    />
                    <InputProfile 
                        textLabel={"Deskripsi"}
                        id={"deskripsi"}
                        holder="-"
                        text={deskripsi}
                        handleChange={(e) => {
                            setdeskripsi(e.target.value);
                        }}
                    />
                    <div className="flex w-full justify-end">
                        <div className="flex px-10 flex-col w-52 justify-end\">
                            <SubmitButton name={"simpan"} handle={tambahHandler}/>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default ProfileTambahProduk