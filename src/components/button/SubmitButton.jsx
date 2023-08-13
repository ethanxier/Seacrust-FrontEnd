

// eslint-disable-next-line react/prop-types
const SubmitButton = ({name, handle}) => {
    return (
        <button className="flex py-2 sm:py-3 justify-center items-center gap-3 self-stretch bg-palleteSubmit hover:bg-palleteSubmitHover text-white rounded-full text-xs sm:text-base" onClick={handle}>{name}</button>
    )
}

export default SubmitButton