import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BaseAPI } from "../../api/api";
import { DefaultPhotoProfile } from '../../data/DefaultItem';

const DescCard = () => {
    const nav = useNavigate()
    const token = window.localStorage.getItem('token')

    const [foto, setFoto] = useState('');
    const [deskripsi, setDeskripsi] = useState('');

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        nav('/')
      };

    const getUserData = () => {
        BaseAPI.get("/user/profile", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            console.log(res.data.data);
            const userData = res.data.data;
            setDeskripsi(userData.deskripsi)
            if (userData.profile_photo == "") {
                setFoto(DefaultPhotoProfile)
              } else {
                setFoto(res.data.data.profile_photo)
              }
        })
        .catch((err) => {
            console.log(err);
        })
    };

    useEffect(() => {
        getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return (
        <div className="flex h-fit sm:flex-col bg-BGtoBottomProfile sm:bg-none sm:bg-white sm:shadow-md sm:rounded-2xl p-3 sm:p-0 gap-2 sm:gap-0 mt-14 sm:mt-0">
            <div className="sm:h-72 sm:p-7 w-auto sm:w-72 bg-BGtoBottom overflow-hidden sm:rounded-2xl sm:mb-3">
                <img src={foto} className='rounded-sm h-24 sm:h-auto'/>
            </div>
            <div className="h-full sm:h-fit box-border">
                <div className="sm:px-7 w-64 sm:w-72 sm:h-56 overflow-hidden text-xxs sm:text-sm mt-1 sm:mt-0 h-fit">
                    <p>{deskripsi}</p>
                </div>
                <div className="flex flex-row pt-3 sm:py-5 justify-end sm:justify-center text-xs sm:text-base items-end box-border h- sm:h-0 gap-2 sm:gap-0">
                    <div className="sm:w-1/2 text-end sm:text-center font-semibold">
                        <Link to="/user/profile/edit">edit profile</Link>
                    </div>
                    <div className="">|</div>
                    <div className="sm:w-1/2 text-end sm:text-center font-semibold text-red-500">
                        <button onClick={handleLogout}>keluar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescCard