import logoGoogle from '/src/assets/logo/google.svg';

// eslint-disable-next-line react/prop-types
const OtherButton = ({name, handler}) => {
    return (
        <button className="flex justify-center py-3 px-7 gap-3 self-stretch bg-white hover:bg-gray-100 rounded-full" onClick={handler}>
            <img src={logoGoogle} alt="logo google" className='w-3 lg:w-6'/>
            <div className="flex self-stretch items-center text-gray-500 font-Inter ">
                {name} with Google
            </div>
        </button>
    )
}

export default OtherButton