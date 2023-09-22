/* eslint-disable react-hooks/exhaustive-deps */
import navList from "../../data/profileNavList.json";
import { BaseAPI } from "../../api/api";
import { useState, useEffect } from "react";
import BarInfo from "../bar/BarInfo";
import NavbarList from "../layout/NavbarList";
import Loading from "../helper/Loading";

const ProfileBiodata = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const token = window.localStorage.getItem("token");

  const getUserData = async () => {
    BaseAPI.get("/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res.data.data);
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
    setIsLoading(false);
  }, [token]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full bg-white sm:border sm:rounded-2xl">
          <NavbarList navList={navList} />
          <div className="p-6 flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-1/2 flex flex-col gap-5">
              <BarInfo
                textLabel={"Nama Lengkap"}
                id={"namaLengkap"}
                text={userData.fullname}
              />
              <BarInfo
                textLabel={"Jenis Kelamin"}
                id={"jenisKelamin"}
                text={userData.jenis_kelamin}
              />
              <BarInfo
                textLabel={"Tanggal Lahir"}
                id={"tanggalLahir"}
                text={userData.tanggal_lahir}
              />
              <BarInfo
                textLabel={"Domisili"}
                id={"domisili"}
                text={userData.domisili}
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-5">
              <BarInfo textLabel={"Email"} id={"email"} text={userData.email} />
              <BarInfo
                textLabel={"No Whatsapp"}
                id={"noWA"}
                text={userData.no_whatsapp}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileBiodata;
