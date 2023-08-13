import logoGoogle from '/src/assets/logo/google.svg';

// eslint-disable-next-line react/prop-types
const GoogleButton = ({name, handler}) => {
    return (
        <button className="flex justify-center py-2 sm:py-3 px-3 sm:px-7 gap-2 sm:gap-3 self-stretch bg-white hover:bg-gray-100 rounded-full" onClick={handler}>
            <img src={logoGoogle} className='w-4 lg:w-6'/>
            <div className="flex self-stretch items-center text-gray-500 font-Inter  text-xs sm:text-base">
                {name} with Google
            </div>
        </button>
    )
}

export default GoogleButton