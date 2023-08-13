

// eslint-disable-next-line react/prop-types
const OtherButton = ({name, handle}) => {
    return (
        <button className="flex py-2 sm:py-3 justify-center items-center gap-3 self-stretch bg-white hover:bg-BGGrey border text-black rounded-lg text-xs sm:text-base w-full" onClick={handle}>{name}</button>
    )
}

export default OtherButton