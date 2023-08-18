import AdminVerifProduct from '../../components/admin/AdminVerifProduct'
import NavBarAdmin from '../../components/layout/NavbarAdmin'

const AdminVerifProductPage = () => {
    return (
        <div className="flex-col min-w-full bg-BGGrey bg-fixed min-h-screen">
            <NavBarAdmin />
            <div className="gap-0 sm:gap-10 w-full flex sm:pt-32 justify-left sm:px-96 flex-col sm:flex-row box-border">
                <AdminVerifProduct />
            </div>
        </div>
    )
}

export default AdminVerifProductPage