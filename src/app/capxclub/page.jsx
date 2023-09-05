// import Navbar from "@/components/Navbar/Navbar"
import SideBar from "@/components/sidebar/Sidebar"
import "../../styles/backgroundstyles.css"
import BackgroundWallpaper from "@/components/Background/Background"

export default function CapxClub(){
    return(
        <>
            <div>
            <div className="app-container">
            <BackgroundWallpaper />
            <SideBar/>
            </div>
            </div>
        </>
    )
}