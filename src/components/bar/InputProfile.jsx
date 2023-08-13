/* eslint-disable react/prop-types */
const InputProfile = ({
    textLabel,
    type = "text",
    id,
    holder,
    handleChange,
    text,
}) => {

    return (
        <div className="flex flex-col items-start gap-1 sm:gap-y-3 self-stretch">
            <label
                htmlFor={id}
                className='self-stretch text-black font-inter text-xs sm:text-lg font-medium leading-6'
            >
                {textLabel}
            </label>
            <input 
            value={text}
            id={id} 
            type={type}
            placeholder={holder}
            className="border-2 w-full xl:w-full text-xs sm:text-base border-neutral-400 rounded-full py-2 px-3 md:py-3 md:px-4 xl:py-2 bg-white focus:outline-none"
            onChange={handleChange}
            >
            </input>
        </div>
    );
};

export default InputProfile;
