import gambarUdang from '/src/assets/gambarUdang.svg'
import './CardProduct.css'

const CardProduct = () => {
    return (
        <div className="boxCard">
            <img src={gambarUdang} alt="product" />
            <h1 className="titleCard">Titel</h1>
            <p className="descCard">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate vehicula fermentum. Proin commodo ultricies mauris, at placerat velit viverra ac.</p>
        </div>
    )
}

export default CardProduct