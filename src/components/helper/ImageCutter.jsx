import { useEffect, useRef } from "react"
import Cropper from "cropperjs"
import "cropperjs/dist/cropper.css"
import PrimerButton from "../button/PrimerButton"

const ImageCutter = ({ foto, handler, x, y, username }) => {
    const imageRef = useRef(null)
    const cropper = useRef(null)
    const timestampRef = useRef(Date.now())

    useEffect(() => {
        console.log(timestampRef.current)
        if (imageRef.current && !cropper.current) {
            cropper.current = new Cropper(imageRef.current, {
                aspectRatio: x,
                viewMode: y,
            })
        }
    }, [x, y])

    const handleCrop = () => {
        if (cropper.current) {
            const croppedCanvas = cropper.current.getCroppedCanvas()
            if (croppedCanvas) {
                const dataURL = croppedCanvas.toDataURL('image/png')
    
                const blob = dataURLToBlob(dataURL)
    
                const file = new File([blob], `${username}${timestampRef.current}.png`, { type: 'image/png' })
    
                console.log(file)
                handler(file)
            }
        }
    }
    
    function dataURLToBlob(dataURL) {
        const byteString = atob(dataURL.split(',')[1])
        const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length)
        const ia = new Uint8Array(ab)
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i)
        }
        return new Blob([ab], { type: mimeString })
    }
    

  return (
    <div className="h-full w-full fixed top-0 left-0 flex justify-center items-center flex-col gap-2 bg-BGCutter" style={{ zIndex: 101 }}>
      <div className="border-2 justify-between flex flex-col gap-4 p-5 bg-white">
        <div className="text-palleteBlue flex justify-center items-center text-lg font-bold">Sesuaikan ukuran foto</div>
        <img src={URL.createObjectURL(foto)} ref={imageRef} className="h-96" alt="Cropped" />
        <PrimerButton name={"Selesai"} handle={handleCrop} />
      </div>
    </div>
  )
}

export default ImageCutter
