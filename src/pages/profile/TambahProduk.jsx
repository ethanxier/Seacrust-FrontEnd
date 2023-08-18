import NavBar from "../../components/Layout/NavBar"
import ProfileTambahProduk from "../../components/profile/ProfileTambahProduk"

const TambahProduk = () => {
    return (
        <div className="w-full min-h-screen flex flex-col bg-BGGrey bg-fixed">
            <NavBar />
            <div className="gap-0 sm:gap-10 w-full flex sm:mt-32 justify-left sm:px-52 flex-col sm:flex-row box-border">
                <ProfileTambahProduk />
            </div>
        </div>
    )
}

export default TambahProduk