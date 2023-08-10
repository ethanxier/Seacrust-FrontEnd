import { useState, Link } from 'react';

const DescCard = () => {
    const [foto, setFoto] = useState('');
    const [desc, setDesc] = useState('');

    return (
        <div className="descContanier">
            <img src="" alt="" />
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate vehicula fermentum. Proin commodo ultricies mauris, at placerat velit viverra ac. Mauris vulputate urna at justo egestas, nec efficitur nisi tristique. Morbi malesuada tortor id purus sagittis, vel volutpat mauris aliquet.</p>
            <div className="button">
                <div className="editProfile">
                    <Link>edit profile</Link>
                </div>|
                <div className="keluar">
                    <Link>keluar</Link>
                </div>
            </div>
        </div>
    )
}

export default DescCard