/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import OtherButton from '../button/OtherButton';

const DescCardEdit = ({deskripsi, foto, handlerdesk, handlerfoto}) => {
    return (
        <div className="flex flex-row sm:flex-col bg-BGtoBottomProfile sm:bg-none sm:bg-white sm:shadow-md sm:rounded-2xl p-3 sm:p-0 gap-2 sm:gap-0 mt-14 sm:mt-0">
            <div className="sm:h-72 sm:p-7 w-96 sm:w-72 bg-BGtoBottom overflow-hidden sm:rounded-2xl">
                <img src={foto} className='rounded-sm h-24 sm:h-auto'/>
            </div>
            <div className="pb-3 px-7">
                <OtherButton name="pilih foto" handle={handlerfoto}/>
            </div>
            <div className="h-full sm:h-fit box-border">
                <div className="border border-b-gray-300 py-1 mx-7 mb-5 sm:h-40 rounded-lg bg-white overflow-hidden">
                    <textarea
                        value={deskripsi}
                        required
                        type={"text"}
                        id={"deskripsi"}
                        placeholder={"deskripsi"}
                        className="w-full h-full text-xs py-1 px-2 md:py-3 md:px-4 xl:py-2 focus:outline-none"
                        onChange={(e) => {
                            handlerdesk(e.target.value)
                        }}
                    />
                </div>
                <div className="flex flex-row pt-3 sm:py-5 justify-end sm:justify-center text-xs sm:text-base items-end box-border h- sm:h-0 gap-2 sm:gap-0">
                    <div className="sm:w-1/2 text-end sm:text-center font-semibold">
                        <Link to="/user/profile">kembali</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescCardEdit