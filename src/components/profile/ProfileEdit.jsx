/* eslint-disable react-hooks/exhaustive-deps */
import { BaseAPI } from "../../api/api"
import { useState, useEffect } from "react"
import InputProfile from "../bar/InputProfile"
import BarInfo from "../bar/BarInfo"
import SubmitButton from "../button/SubmitButton"
import { useNavigate  } from "react-router"
import DescCardEdit from "./DescCardEdit"
import Loading from "../helper/Loading"


const ProfileEdit = () => {
    const nav = useNavigate()

    const [isLoading, setIsLoading] = useState(true)
    const [fullname, setfullname] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [jenisKelamin, setjenisKelamin] = useState('')
    const [tanggalLahir, settanggalLahir] = useState('')
    const [domisili, setdomisili] = useState('')
    const [noWA, setnoWA] = useState('')
    const [foto, setfoto] = useState('')

    const [userData, setUserData] = useState([])
    const token = window.localStorage.getItem('token')

    const updateHandler = () => {
        setIsLoading(true)
        BaseAPI.put("user/profile/update", {
            full_name: fullname,
            deskripsi: deskripsi,
            jenis_kelamin: jenisKelamin,
            tanggal_lahir: tanggalLahir,
            domisili: domisili,
            no_whatsapp: noWA,
        }, {
            headers: { Authorization: `Bearer ${token}` },
          })
        .then((res) => {
            console.log(res.data)
            nav('/user/profile')
            window.location.reload()
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    }

    const getUserData = () => {
        BaseAPI.get("/user/profile", {
            headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => {
              console.log(res.data.data)
              const userData = res.data.data
              setUserData(userData)
              setfullname(userData.fullname)
              setjenisKelamin(userData.jenis_kelamin)
              settanggalLahir(userData.tanggal_lahir)
              setdomisili(userData.domisili)
              setnoWA(userData.no_whatsapp)
              setDeskripsi(userData.deskripsi)
              if (userData.profile_photo == "") {
                setfoto('https://i.pinimg.com/originals/f5/fd/14/f5fd146c41549072d5a7823e31ea8eae.png')
              } else {
                setfoto(res.data.data.profile_photo)
              }
          })
          .catch((err) => {
              console.log(err)
          })
      }
    
    useEffect(() => {
        getUserData()
        setIsLoading(false)
    }, [token])

    return(
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <DescCardEdit deskripsi={deskripsi} foto={foto} handlerfoto={setfoto} handlerdesk={setDeskripsi} username={userData.username}/>
                    <div className="w-full bg-white sm:border sm:rounded-2xl">
                        <div className="p-10 flex flex-col sm:flex-row gap-6">
                            <div className="w-full sm:w-1/2 flex flex-col gap-5">
                                <InputProfile 
                                textLabel={"Nama Lengkap"}
                                id={"namaLengkap"}
                                text={fullname}
                                holder="-"
                                handleChange={(e) => {
                                    setfullname(e.target.value)
                                }}
                                />
                                <InputProfile 
                                textLabel={"Jenis Kelamin"}
                                id={"jenisKelamin"}
                                text={jenisKelamin}
                                holder="ex: laki-laki"
                                handleChange={(e) => {
                                    setjenisKelamin(e.target.value)
                                }}
                                />
                                <InputProfile 
                                textLabel={"Tanggal Lahir"}
                                id={"tanggalLahir"}
                                text={tanggalLahir}
                                holder="ex: 01 Januari 2004"
                                handleChange={(e) => {
                                    settanggalLahir(e.target.value)
                                }}
                                />
                                <InputProfile 
                                textLabel={"Domisili"}
                                id={"domisili"}
                                text={domisili}
                                holder="ex: Malang"
                                handleChange={(e) => {
                                    setdomisili(e.target.value)
                                }}
                                />
                            </div>
                            <div className="w-full sm:w-1/2 flex flex-col gap-5">
                                <BarInfo 
                                textLabel={"Email"}
                                id={"email"}
                                text={userData.email}
                                />
                                <InputProfile 
                                textLabel={"No Whatsapp"}
                                id={"noWA"}
                                text={noWA}
                                holder="ex: 6283123456789"
                                handleChange={(e) => {
                                    setnoWA(e.target.value)
                                }}
                                />
                            </div>
                        </div>   
                        <div className="flex px-10 sm:px-11 flex-col w-52">
                            <SubmitButton name={"simpan"} handle={updateHandler}/></div>        
                    </div>
                </>
            )}
        </>
    )
}

export default ProfileEdit