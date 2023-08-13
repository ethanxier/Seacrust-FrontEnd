import NavBar from "../../components/Layout/NavBar"
import ProfileEdit from "../../components/profile/ProfileEdit"

const EditProfile = () => {
    return (
        <div className="w-full h-screen flex flex-col bg-BGGrey bg-fixed">
            <NavBar />
            <div className="gap-0 sm:gap-10 w-full flex sm:mt-32 justify-left sm:px-52 flex-col sm:flex-row box-border">
                <ProfileEdit />
            </div>
        </div>
    )
}

export default EditProfile