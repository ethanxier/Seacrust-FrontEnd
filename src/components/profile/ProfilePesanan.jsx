import NavbarList from "../layout/NavbarList"
import navList from '../../data/profileNavList.json'

const ProfilePesanan = () => {
    return(
        <div className="w-full bg-white block sm:border sm:rounded-2xl">
            <NavbarList navList={navList}/>
        </div>
    )
}

export default ProfilePesanan