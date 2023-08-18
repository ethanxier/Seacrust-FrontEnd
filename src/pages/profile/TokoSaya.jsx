import NavBar from "../../components/Layout/NavBar"
import DescCard from "../../components/profile/DescCard"
import ProfileTokoSaya from "../../components/profile/ProfileTokoSaya"

const TokoSaya = () => {
    return (
        <div className="w-full min-h-screen flex flex-col bg-BGGrey bg-fixed">
            <NavBar />
            <div className="gap-0 sm:gap-10 w-full flex sm:my-32 justify-left sm:px-52 flex-col sm:flex-row box-border">
                <DescCard />
                <ProfileTokoSaya />
            </div>
        </div>
    )
}

export default TokoSaya