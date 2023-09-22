/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import OtherButton from '../button/OtherButton'
import { useRef, useState } from 'react'
import { BaseAPI } from '../../api/api'
import Loading from '../helper/Loading'
import ImageCutter from '../helper/ImageCutter'

const DescCardEdit = ({deskripsi, handlerdesk, foto, username}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isPhotoSelected, setIsPhotoSelected] = useState(false)
    const fileFoto = useRef(null)
    const token = window.localStorage.getItem('token')

    const handleFileChange = (event) => {
        fileFoto.current = event.target.files[0]
        setIsPhotoSelected(true)
    }

    const submitPhoto = (croppedPhoto) => {
        if (croppedPhoto) {
            setIsLoading(true)
            const formData = new FormData()
            formData.append('foto', croppedPhoto)

            BaseAPI.put(
                'user/profile/update/photo',
                formData,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then((res) => {
                console.log(res.data)
                window.location.reload()
                setIsLoading(false)
                setIsPhotoSelected(false)
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)
                setIsPhotoSelected(false)
            })
        }
    }

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="flex flex-row sm:flex-col bg-BGtoBottomProfile sm:bg-none sm:bg-white sm:shadow-md sm:rounded-2xl p-3 sm:p-0 gap-2 sm:gap-0 mt-14 sm:mt-0">
                    {isPhotoSelected && (
                        <ImageCutter
                            foto={fileFoto.current}
                            handler={submitPhoto}
                            username={username}
                            x={1}
                            y={1}
                        />
                    )}
                    <div className="sm:h-72 sm:p-7 w-auto sm:w-72 bg-BGtoBottom overflow-hidden sm:rounded-2xl">
                        <img src={foto} className='rounded-sm h-24 sm:h-auto'/>
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
                        <OtherButton name="ganti foto" handle={() => fileFoto.current.click()}/>
                    </div>
                    <div className="h-full sm:h-fit box-border">
                        <div className="border border-b-gray-300 py-1 mx-7 mb-5 sm:h-40 rounded-lg bg-white overflow-hidden">
                            <textarea
                                value={deskripsi}
                                required
                                type={"text"}
                                id={"deskripsi"}
                                placeholder={"deskripsi"}
                                className="w-full h-full text-xs py-1 px-2 md:py-3 md:px-4 xl:py-2 focus:outline-none"
                                onChange={(e) => {
                                    handlerdesk(e.target.value)
                                }}
                            />
                        </div>
                        <div className="flex flex-row pt-3 sm:py-5 justify-end sm:justify-center text-xs sm:text-base items-end box-border h- sm:h-0 gap-2 sm:gap-0">
                            <div className="sm:w-1/2 text-end sm:text-center font-semibold">
                                <Link to="/user/profile">kembali</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DescCardEdit