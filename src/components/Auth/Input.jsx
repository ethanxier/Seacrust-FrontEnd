/* eslint-disable react/prop-types */
const Input = ({
    textLabel,
    type = "text",
    id,
    holder,
    handleChange,
    value,
  }) => {
  
    return (
        <div className="flex flex-col items-start gap-y-2 self-stretch">
            <label 
            htmlFor={id}
            className='self-stretch text-white font-inter text-20 font-medium leading-6'
            >
            {textLabel}
            </label>
            <input
                value={value}
                required
                type={type}
                id={id}
                placeholder={holder}
                className="border-2 xl:w-72 text-sm border-neutral-400 rounded-full py-2 px-3 md:py-3 md:px-4 xl:py-2 bg-white focus:outline-none"
                onChange={handleChange}
            />
        </div>
    );
  };
  
  export default Input