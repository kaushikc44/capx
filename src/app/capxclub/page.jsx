// import Navbar from "@/components/Navbar/Navbar"
import SideBar from "@/components/sidebar/Sidebar"
import "../../styles/backgroundstyles.css"
import BackgroundWallpaper from "@/components/Background/Background"
import Card from "@/components/card/Card"
import Navbar from "@/components/Navbar/Navbar"

export default function CapxClub(){
    
    const cardData = [
        { title: "Card 1", description: "Description 1", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 1", description: "Description 1", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 1", description: "Description 1", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        // Add more card data objects here
      ];

    
        

    return(<>
    
    
    <div className="relative">
        {/* Background Wallpaper with z-index: -1 */}
        <div className="absolute inset-0 z-0">
          <BackgroundWallpaper />
        </div>
        <div className="flex flex-row relative z-10">
          <div className="flex flex-row">
            <Navbar className="" />
            <SideBar />
          </div>
          <div className="flex-grow ml-[180px] mt-[160px]">
            <div className="flex flex-wrap">
              {cardData.map((card, index) => (
                <div key={index} className="w-1/4 p-4">
                  <Card
                    title={card.title}
                    description={card.description}
                    /* other properties */
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
       
    
    </>
    )
}