import NavBar from "../../components/Layout/NavBar"
import DescCard from "../../components/profile/DescCard"
import ProfileRiwayat from "../../components/profile/ProfileRiwayat"

const Riwayat = () => {
    return (
        <div className="w-full h-screen flex flex-col bg-BGGrey bg-fixed">
            <NavBar />
            <div className="gap-0 sm:gap-10 w-full flex sm:mt-32 justify-left sm:px-52 flex-col sm:flex-row box-border">
                <DescCard />
                <ProfileRiwayat />
            </div>
        </div>
    )
}

export default Riwayat