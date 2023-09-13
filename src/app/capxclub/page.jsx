"use client"

// import Navbar from "@/components/Navbar/Navbar"
import SideBar from "@/components/sidebar/Sidebar"
import "../../styles/backgroundstyles.css"
import BackgroundWallpaper from "@/components/Background/Background"
import Card from "@/components/card/Card"
import Navbar from "@/components/Navbar/Navbar"
import axios from "axios"
import { useState,useEffect } from "react"
import Footer from "@/components/Footer/Footer"



export default function CapxClub(){
    
    const cardData = [
        { title: "Card 1", description: "Description 1", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 1", description: "Description 1", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 1", description: "Description 1", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        { title: "Card 2", description: "Description 2", /* other properties */ },
        // Add more card data objects here
      ];

    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch Airtable data when the component mounts
        const fetchData = async () => {
          try {
            const response = await axios.get('/api/airtable-data');
            console.log("Fetching data")
            console.log("Data is fetched",response)
            setData(response.data.records);
          } catch (error) {
            console.error('Error fetching Airtable data:', error);
          }
        };
    
        fetchData();
    }, []);
      

    
        

    return(<>
    
    
    <div className="relative bg-gradient-to-r from-green-900 via-orange-600 to-blue-900">
        {/* Background Wallpaper with z-index: -1 */}
        {/* <div className="absolute inset-0 z-0 "> */}
          {/* <BackgroundWallpaper /> */}
        {/* </div> */}

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
            <Footer />
          </div>
        </div>
      </div>
       
    
    </>
    )
}