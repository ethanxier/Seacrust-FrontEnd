import gambar1 from "/src/assets/infoHome/gambarInfo1.svg"
import gambar2 from "/src/assets/infoHome/gambarInfo2.svg"
import gambar3 from "/src/assets/infoHome/gambarInfo3.svg"
import gambar4 from "/src/assets/infoHome/gambarInfo4.svg"
import "./Info.css"

const Info = () => {
    return (
        <div className="boxInfo">
            <div className="squareInfoLeft">
                <img src={gambar1}/>
                <div className="descInfo">
                    <h1 className="titleInfo">Konsumen</h1>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate vehicula fermentum. Proin commodo ultricies mauris, at placerat velit viverra ac. Mauris vulputate urna at justo egestas, nec efficitur nisi tristique. Morbi malesuada tortor id purus sagittis, vel volutpat mauris aliquet.</p>
            </div>
        </div>
        <div className="squareInfoRight">
            <img src={gambar2}/>
            <div className="descInfo">
                <h1 className="titleInfo">Tengkulak</h1>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate vehicula fermentum. Proin commodo ultricies mauris, at placerat velit viverra ac. Mauris vulputate urna at justo egestas, nec efficitur nisi tristique. Morbi malesuada tortor id purus sagittis, vel volutpat mauris aliquet.</p>
            </div>
        </div>
        <div className="squareInfoLeft">
            <img src={gambar3}/>
            <div className="descInfo">
                <h1 className="titleInfo">Pembudidaya</h1>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate vehicula fermentum. Proin commodo ultricies mauris, at placerat velit viverra ac. Mauris vulputate urna at justo egestas, nec efficitur nisi tristique. Morbi malesuada tortor id purus sagittis, vel volutpat mauris aliquet.</p>
            </div>
        </div>
        <div className="squareInfoRight">
            <img src={gambar4}/>
            <div className="descInfo">
                <h1 className="titleInfo">Nelayan Tangkap</h1>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate vehicula fermentum. Proin commodo ultricies mauris, at placerat velit viverra ac. Mauris vulputate urna at justo egestas, nec efficitur nisi tristique. Morbi malesuada tortor id purus sagittis, vel volutpat mauris aliquet.</p>
            </div>
        </div>
    </div>
    )
}

export default Info