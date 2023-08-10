

// eslint-disable-next-line react/prop-types
const SubmitButton = ({name}) => {
    return (
        <button className="flex py-3 justify-center items-center gap-3 self-stretch bg-palleteSubmit hover:bg-palleteSubmitHover text-white rounded-full">{name}</button>
    )
}

export default SubmitButton