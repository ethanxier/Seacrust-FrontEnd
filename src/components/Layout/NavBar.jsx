/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BaseAPI } from '../../api/api'

import logoSeacrust from '/src/assets/logo/logo-1.1.svg'
import ikon from '/src/assets/ikon/search-icon.svg'
import { DefaultPhotoProfile } from '../../data/DefaultItem'

const NavBar = ({Skey}) => {
  const [username, setUsername] = useState('')
  const [profilePhoto, setProfilePhoto] = useState('')
  const [searchKey, setSearchKey] = useState('')
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      getDataUser()
    }
    console.log("keynav = " + Skey)
    if (typeof Skey === 'string') {
      setSearchKey(Skey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const getDataUser = async () => {
    // console.log(`Bearer ${token}`)
    BaseAPI.get('navbar', {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        console.log(res.data)
        setUsername(res.data.data.username)
        // setProfilePhoto(res.data.data.profile_photo)
        if (res.data.data.profile_photo == "") {
          setProfilePhoto(DefaultPhotoProfile)
        } else {
          setProfilePhoto(res.data.data.profile_photo)
        }
      }, (err) => {
        console.log(err.response.data)
        window.localStorage.setItem('token', '')
      })
  }

  const handleSearch = () => {
    if (searchKey) {
      window.location.href = `/product/search?key=${searchKey}`
    }
  }

  return (
    <div className="flex py-2 sm:py-0 px-3 sm:px-8 justify-center items-center gap-8 sm:gap-12 md:gap-44 self-stretch bg-white shadow-md fixed w-full" style={{
      zIndex: 100,
    }}>

      <div className="flex items-center">
        <Link to="/" className='w-24 md:w-56 items-start'>
          <img src={logoSeacrust} alt="Logo Seacrust " />
        </Link>
      </div>

      <div className="flex-row justify-center">
        <form onSubmit={(e) => { e.preventDefault(); handleSearch() }}>
          <div className="flex items-start self-stretch rounded-full border-2 overflow-hidden bg-white py-1 sm:py-2 px-1 sm:px-2">
            <button
              className="flex justify-center w-3 sm:w-8 h-full cursor-pointer items-center focus:outline-none border-none hover:border-none"
              type="submit"
            >
              <img src={ikon} alt="Search Icon" className="w-2 sm:w-5" />
            </button>
            <input
              type="text"
              id="key"
              placeholder="Search"
              value={searchKey}
              className="focus:outline-none w-20 xl:w-96 px-2 text-xxs md:text-base justify-center bg-transparent border-none"
              autoComplete="off"
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="text-right text-no-underline text-black mx-1 sm:mx-2 flex-1 text-xxs sm:text-base">
        {username ? (
          <>
            <Link to='/user/profile' className='flex gap-2 sm:gap-5 items-center self-stretch justify-end'>
              <div className='text-xxs sm:text-xl font-medium text-right'>{username}</div>
              <div className="w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden justify-end">
                <img src={profilePhoto} alt="profile"/>
              </div>
            </Link>
          </>
        ) : (
          <>
            <div className="flex flex-row text-right gap-1 sm:gap-3 justify-end">
              <Link to="/login" className='hover:text-palleteBlue font-medium text-xxs sm:text-base'>Log In</Link>
              <div>|</div>
              <Link to="/register" className='hover:text-palleteBlue font-medium text-xxs sm:text-base'>Sign Up</Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar
