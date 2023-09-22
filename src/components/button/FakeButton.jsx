

// eslint-disable-next-line react/prop-types
const FakeButton = ({name}) => {
    return (
        <div className="flex py-2 sm:py-3 justify-center items-center gap-3 self-stretch flex-1 bg-gray-400 text-white rounded-full text-xs sm:text-base" >{name}</div>
    )
}

export default FakeButton