/* eslint-disable react-hooks/exhaustive-deps */
import { BaseAPI } from "../../api/api";
import { useEffect, useState } from "react";
import InputProfile from "../bar/InputProfile";
import SubmitButton from "../button/SubmitButton";
import { useNavigate  } from "react-router";
import { Link } from "react-router-dom";
import InputDropDown from "../bar/InputDropDown";


const ProfileDaftarToko = () => {
    const nav = useNavigate()

    const [namaToko, setnamaToko] = useState('');
    const [alamatToko, setalamatToko] = useState('');
    const [kodePos, setkodePos] = useState('');
    const [provinsi, setprovinsi] = useState('');
    const [kota, setkota] = useState('');
    const [kecamatan, setkecamatan] = useState('');
    const [desa, setdesa] = useState('');

    const [provinsiOptions, setProvinsiOptions] = useState([]);
    const [kotaOptions, setKotaOptions] = useState([]);
    const [kecamatanOptions, setKecamatanOptions] = useState([]);
    const [desaOptions, setDesaOptions] = useState([]);

    const token = window.localStorage.getItem('token')

    const regisHandler = () => {
        console.log({
            name: namaToko,
            alamat: alamatToko,
            kode_pos: kodePos,
            provinsi: provinsi[1],
            kota: kota[1],
            kecamatan: kecamatan[1],
            desa: desa[1],}
        )
        BaseAPI.post("user/toko/regis", {
            name: namaToko,
            alamat: alamatToko,
            provinsi: provinsi[1],
            kota: kota[1],
            kecamatan: kecamatan[1],
            desa: desa[1],
            kode_pos: kodePos,
        }, {
            headers: { Authorization: `Bearer ${token}` },
          })
        .then((res) => {
            console.log(res.data)
            nav('/user/store')
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        BaseAPI.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
            .then((res) => {
                // console.log(res.data.provinsi)
                const dataAppendDefault = [{ id: '-1', name: '' }, ...res.data.provinsi];
                setProvinsiOptions(dataAppendDefault);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        // Fetch Kota data when Provinsi is selected
        if (provinsi) {
            BaseAPI.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsi[0]}`)
                .then((res) => {
                    const dataAppendDefault = [{ id: '-1', name: '' }, ...res.data.kota_kabupaten];
                    setKotaOptions(dataAppendDefault);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [provinsi]);

    useEffect(() => {
        if (kota) {
            BaseAPI.get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kota[0]}`)
                .then((res) => {
                    const dataAppendDefault = [{ id: '-1', name: '' }, ...res.data.kecamatan];
                    setKecamatanOptions(dataAppendDefault);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [kota]);

    useEffect(() => {
        if (kecamatan) {
            BaseAPI.get(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${kecamatan[0]}`)
                .then((res) => {
                    const dataAppendDefault = [{ id: '-1', name: '' }, ...res.data.kelurahan];
                    setDesaOptions(dataAppendDefault);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [kecamatan]);

    return(
        <>
        <div className="w-full bg-white sm:border sm:rounded-2xl py-5">
            <div className="p-10 flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-1/2 flex flex-col gap-5">
                    <InputProfile
                    required 
                    textLabel={"Nama Toko"}
                    id={"namatoko"}
                    text={namaToko}
                    holder="-"
                    handleChange={(e) => {
                        setnamaToko(e.target.value);
                    }}
                    />
                    <InputProfile
                    required 
                    textLabel={"Alamat Toko"}
                    id={"alamatToko"}
                    text={alamatToko}
                    holder="ex: Jl. bunga melati no.52 RT02 RW05"
                    handleChange={(e) => {
                        setalamatToko(e.target.value);
                    }}
                    />
                    <InputProfile
                    required 
                    textLabel={"Kode Pos"}
                    id={"kodePos"}
                    text={kodePos}
                    type="number"
                    holder="ex: 65175"
                    handleChange={(e) => {
                        setkodePos(e.target.value);
                    }}
                    />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col gap-5">
                    <InputDropDown
                        required
                        textLabel={"Provinsi"}
                        id={"provinsi"}
                        text={provinsi[2]}
                        handleChange={(e) => {
                            setprovinsi(e.target.value.split("#"));
                            setkota("");
                            setkecamatan("");
                            setdesa("");
                        }}
                        options={provinsiOptions}
                    />
                    <InputDropDown
                        required
                        textLabel={"Kota/Kabupaten"}
                        id={"kota"}
                        text={kota[2]}
                        handleChange={(e) => {
                            setkota(e.target.value.split("#"));
                            setkecamatan("");
                            setdesa("");
                        }}
                        options={kotaOptions}
                    />
                    <InputDropDown
                        required
                        textLabel={"Kecamatan"}
                        id={"kecamatan"}
                        text={kecamatan[2]}
                        handleChange={(e) => {
                            setkecamatan(e.target.value.split("#"));
                            setdesa("");
                        }}
                        options={kecamatanOptions}
                    />
                    <InputDropDown
                        textLabel={"Desa/Kelurahan"}
                        id={"desa"}
                        text={desa[2]}
                        handleChange={(e) => {
                            setdesa(e.target.value.split("#"));
                        }}
                        options={desaOptions}
                    />
                    <div className="text-gray-600 text-xs">
                *kosongkan jika satu kelurahan dengan kecamatan
                    </div>
                </div>
            </div>   
            <div className="flex px-12 w-full flex-row">
                <Link to="/user/store" className="flex flex-col px-10 sm:px-8 w-auto bg-red-600 rounded-full justify-center text-white">kembali</Link>
                <div className="flex flex-col px-10 sm:px-11 w-52">
                    <SubmitButton name={"daftar"} handle={regisHandler}/>
                </div>
            </div>        
        </div>
        </>
    )
}

export default ProfileDaftarToko