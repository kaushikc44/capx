// import Navbar from "@/components/Navbar/Navbar"
import SideBar from "@/components/sidebar/Sidebar"
import "../../styles/backgroundstyles.css"
import BackgroundWallpaper from "@/components/Background/Background"
import Card from "@/components/card/Card"

export default function CapxClub(){
    return(
        <>
            <div>
            <div className="app-container">
            {/* <BackgroundWallpaper /> */}
            {/* <SideBar/> */}
            <Card title={"Polygon"} description={"Polygon Chain"} chain={"polygon"} currency={"usdc"} amount={"1700"} EndDate={"7 Days"} />
            </div>
            </div>
        </>
    )
}