/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import InputProfile from "../bar/InputProfile"
import InputDropDown from "../bar/InputDropDown"
import SubmitButton from "../button/SubmitButton"
import { BaseAPI } from "../../api/api"
import OtherButton from "../button/OtherButton"
import Loading from "../helper/Loading"
import FakeButton from "../button/FakeButton"


const AddAddress = ({goBack}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [namaPenerima, setNamaPenerima] = useState('')
    const [noTelp, setNoTelp] = useState('')
    const [alamat, setalamat] = useState('')
    const [kodePos, setkodePos] = useState('')
    const [provinsi, setprovinsi] = useState('')
    const [kota, setkota] = useState('')
    const [kecamatan, setkecamatan] = useState('')
    const [desa, setdesa] = useState('')

    const [provinsiOptions, setProvinsiOptions] = useState([])
    const [kotaOptions, setKotaOptions] = useState([])
    const [kecamatanOptions, setKecamatanOptions] = useState([])
    const [desaOptions, setDesaOptions] = useState([])

    const token = window.localStorage.getItem('token')

    const tambahHandler = () => {
        setIsLoading(true)
        BaseAPI.post("/user/address/add", {
            nama_penerima: namaPenerima,
            nomor_hp: noTelp,
            alamat: alamat,
            provinsi: provinsi[1],
            kota: kota[1],
            kecamatan: kecamatan[1],
            desa: desa[1],
            kode_pos: kodePos,
        }, {
            headers: { Authorization: `Bearer ${token}` },
          })
        .then((res) => {
            setIsLoading(false)
            console.log(res.data)
            goBack()
            window.location.reload()
        })
        .catch((err) => {
            setIsLoading(false)
            console.log(err)
        })
    }

    useEffect(() => {
        BaseAPI.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
            .then((res) => {
                // console.log(res.data.provinsi)
                const dataAppendDefault = [{ id: '-1', name: '' }, ...res.data.provinsi]
                setProvinsiOptions(dataAppendDefault)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        // Fetch Kota data when Provinsi is selected
        if (provinsi) {
            BaseAPI.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsi[0]}`)
                .then((res) => {
                    const dataAppendDefault = [{ id: '-1', name: '' }, ...res.data.kota_kabupaten]
                    setKotaOptions(dataAppendDefault)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [provinsi])

    useEffect(() => {
        if (kota) {
            BaseAPI.get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kota[0]}`)
                .then((res) => {
                    const dataAppendDefault = [{ id: '-1', name: '' }, ...res.data.kecamatan]
                    setKecamatanOptions(dataAppendDefault)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [kota])

    useEffect(() => {
        if (kecamatan) {
            BaseAPI.get(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${kecamatan[0]}`)
                .then((res) => {
                    const dataAppendDefault = [{ id: '-1', name: '' }, ...res.data.kelurahan]
                    setDesaOptions(dataAppendDefault)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [kecamatan])

    return (
        <div className="h-full w-full fixed top-0 left-0 flex justify-center items-center flex-col gap-2 bg-BGCutter"
        style={{
            zIndex: 101,
        }}>
            {isLoading && (
                <Loading />
            )}
            <div className="p-10 flex flex-col sm:flex-row gap-6 bg-white border-2 rounded-2xl">
                <div className="w-full sm:w-1/2 flex flex-col gap-5">
                    <InputProfile
                    required 
                    textLabel={"Nama Penerima"}
                    id={"namaPenerima"}
                    text={namaPenerima}
                    handleChange={(e) => {
                        setNamaPenerima(e.target.value)
                    }}
                    />
                    <InputProfile
                    required 
                    textLabel={"Nomor Telepon"}
                    id={"noTelp"}
                    text={noTelp}
                    type="number"
                    handleChange={(e) => {
                        setNoTelp(e.target.value.toString())
                    }}
                    />
                    <InputProfile
                    required 
                    textLabel={"Alamat"}
                    id={"alamat"}
                    text={alamat}
                    holder="ex: Jl. bunga melati no.52 RT02 RW05"
                    handleChange={(e) => {
                        setalamat(e.target.value)
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
                        setkodePos(e.target.value)
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
                            setprovinsi(e.target.value.split("#"))
                            setkota("")
                            setkecamatan("")
                            setdesa("")
                        }}
                        options={provinsiOptions}
                    />
                    <InputDropDown
                        required
                        textLabel={"Kota/Kabupaten"}
                        id={"kota"}
                        text={kota[2]}
                        handleChange={(e) => {
                            setkota(e.target.value.split("#"))
                            setkecamatan("")
                            setdesa("")
                        }}
                        options={kotaOptions}
                    />
                    <InputDropDown
                        required
                        textLabel={"Kecamatan"}
                        id={"kecamatan"}
                        text={kecamatan[2]}
                        handleChange={(e) => {
                            setkecamatan(e.target.value.split("#"))
                            setdesa("")
                        }}
                        options={kecamatanOptions}
                    />
                    <InputDropDown
                        textLabel={"Desa/Kelurahan"}
                        id={"desa"}
                        text={desa[2]}
                        handleChange={(e) => {
                            setdesa(e.target.value.split("#"))
                        }}
                        options={desaOptions}
                    />
                    <div className="text-gray-600 text-xs">
                *kosongkan jika satu kelurahan dengan kecamatan
                    </div>
                    <div className="flex flex-row w-full gap-5">
                        <div className="flex px-10 w-52">
                            <OtherButton name={"batal"} handle={goBack}></OtherButton>
                        </div>
                        <div className="flex px-10 w-52">
                            {namaPenerima && noTelp && kodePos && alamat && provinsi && kota && kecamatan ? (
                                <SubmitButton name={"tambah"} handle={tambahHandler} />
                            ) : (
                                <FakeButton name={"tambah"} />
                            )}
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AddAddress