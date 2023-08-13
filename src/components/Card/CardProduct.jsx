import gambarUdang from '/src/assets/gambarUdang.svg'

const CardProduct = () => {
    return (
        <div className="w-1/2 sm:w-auto p-2 box-border items-center">
            <div className="w-full sm:w-72 bg-white rounded-10 shadow-md p-2 sm:p-5 text-center m-auto sm:m-5 box-border rounded-md h-48 sm:h-96 overflow-hidden">
            <img src={gambarUdang} className="w-full sm:w-full" />
            <h1 className="text-left text-sm sm:text-2xl font-bold mt-1 sm:mt-2 text-palleteBlue">Title</h1>
            <p className="text-left mt-2 descCard hidden sm:block text-gray-600 sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate vehicula fermentum. Proin commodo ultricies mauris, at placerat velit viverra ac.</p>
        </div>
        </div>
    )
}

export default CardProduct