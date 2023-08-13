import gambar1 from "/src/assets/infoHome/gambarInfo1.svg"
import gambar2 from "/src/assets/infoHome/gambarInfo2.svg"
import gambar3 from "/src/assets/infoHome/gambarInfo3.svg"
import gambar4 from "/src/assets/infoHome/gambarInfo4.svg"

const Info = () => {
    return (
        <div className="w-full flex-col">
            <div className="flex items-center m-5 sm:m-12 p-4 sm:p-12 flex-row">
                <img className='w-20 sm:w-80 mx-2 sm:mx-10' src={gambar1}/>
                <div className="w-full flex-col gap-2">
                    <h1 className="text-palleteBlue sm:text-4xl font-bold mb-2">Konsumen</h1>
                    <p className="text-xxs sm:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate vehicula fermentum. Proin commodo ultricies mauris, at placerat velit viverra ac. Mauris vulputate urna at justo egestas, nec efficitur nisi tristique. Morbi malesuada tortor id purus sagittis, vel volutpat mauris aliquet.</p>
            </div>
        </div>
        <div className="flex items-center m-5 sm:m-12 p-4 sm:p-12 flex-row-reverse">
            <img className='w-20 sm:w-80 mx-2 sm:mx-10' src={gambar2}/>
            <div className="w-full flex-col gap-2">
                <h1 className="text-palleteBlue sm:text-4xl font-bold mb-2 text-right">Tengkulak</h1>
                <p className="text-xxs sm:text-2xl text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate vehicula fermentum. Proin commodo ultricies mauris, at placerat velit viverra ac. Mauris vulputate urna at justo egestas, nec efficitur nisi tristique. Morbi malesuada tortor id purus sagittis, vel volutpat mauris aliquet.</p>
            </div>
        </div>
        <div className="flex items-center m-5 sm:m-12 p-4 sm:p-12 flex-row">
            <img className='w-20 sm:w-80 mx-2 sm:mx-10' src={gambar3}/>
            <div className="w-full flex-col gap-2">
                <h1 className="text-palleteBlue sm:text-4xl font-bold mb-2">Pembudidaya</h1>
                <p className="text-xxs sm:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate vehicula fermentum. Proin commodo ultricies mauris, at placerat velit viverra ac. Mauris vulputate urna at justo egestas, nec efficitur nisi tristique. Morbi malesuada tortor id purus sagittis, vel volutpat mauris aliquet.</p>
            </div>
        </div>
        <div className="flex tems-center m-5 sm:m-12 p-4 sm:p-12 flex-row-reverse">
            <img className='w-20 sm:w-80 mx-2 sm:mx-10' src={gambar4}/>
            <div className="w-full flex-col gap-2">
                <h1 className="text-palleteBlue sm:text-4xl font-bold mb-2 text-right">Nelayan Tangkap</h1>
                <p className="text-xxs sm:text-2xl text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate vehicula fermentum. Proin commodo ultricies mauris, at placerat velit viverra ac. Mauris vulputate urna at justo egestas, nec efficitur nisi tristique. Morbi malesuada tortor id purus sagittis, vel volutpat mauris aliquet.</p>
            </div>
        </div>
    </div>
    )
}

export default Info