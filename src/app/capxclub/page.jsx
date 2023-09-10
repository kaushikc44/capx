// import Navbar from "@/components/Navbar/Navbar"
import SideBar from "@/components/sidebar/Sidebar"
import "../../styles/backgroundstyles.css"
import BackgroundWallpaper from "@/components/Background/Background"
import Card from "@/components/card/Card"
import Navbar from "@/components/Navbar/Navbar"

export default function CapxClub(){
    return(<>
    
    
        <div className="relative">
        {/* Background Wallpaper with z-index: -1 */}
        <div className="absolute inset-0 z-[-1]">
            <BackgroundWallpaper />
        </div>
        <div className="flex flex-row  z-[1]">
            <Navbar className=""/>
            <SideBar/>
            
        </div>
        {/* Your Card component */}
        {/* <Card title={"Polygon"} description={"Polygon Chain"} chain={"polygon"} currency={"usdc"} amount={"1700"} EndDate={"7 Days"} /> */}
    </div>
    </>
    )
}