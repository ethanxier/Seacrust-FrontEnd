

// eslint-disable-next-line react/prop-types
const PrimerButton = ({name, handle}) => {
    return (
        <button className="flex py-2 sm:py-3 justify-center items-center gap-3 self-stretch bg-palleteBlue hover:bg-palleteSubmit text-white rounded-full text-xs sm:text-base" onClick={handle}>{name}</button>
    )
}

export default PrimerButton