import Navbar from "../Navbar/Navbar";
import SideBar from "../sidebar/Sidebar";
export default function Layout(){
    return(
        <>
            <div className="flex">
                <SideBar />
                <Navbar />
            </div>
        </>
    )
}   