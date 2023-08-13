/* eslint-disable react/prop-types */
import Map from "/src/assets/Map.svg"

const MapBox = (props) => {
    return (
        <div className="flex flex-col items-center justify-center pt-16 sm:pt-20 box-border">
            <h1 className="text-center text-2xl sm:text-4xl font-medium text-palleteBlue sm:mt-5">{props.menu}</h1>
            <img src={Map} className="p-3 sm:p-8 box-border" />
        </div>
    )
}

export default MapBox