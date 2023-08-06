/* eslint-disable react/prop-types */
import Map from "/src/assets/Map.svg"
import './MapBox.css'

const MapBox = (props) => {
    return (
        <div className="MapContainer">
            <h1 className="titleMap">{props.menu}</h1>
            <img src={Map} />
        </div>
    )
}

export default MapBox