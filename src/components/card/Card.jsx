"use client"
import Image from "next/image"
import "@/styles/lineseprator.css"
import polygon from "../../../images/polygon.png"
import usdc from "../../../images/usdc.jpeg"

function getImageSource(currency) {
    let currencyImage = ""
    if (currency === "usdc") {
        currencyImage =  usdc; // Update with the actual path to your usdc image in the public folder
    } else if (currency === "usdt") {
        currencyImage =  usdc; // Update with the actual path to your usdt image in the public folder
    } else {
        currencyImage =  usdc; // Provide a default image path or handle other cases
    }
    return currencyImage;
}

function getChainImage(chain) {
    let imageSrc = "";

    // Determine the image source based on the chain
    if (chain === "polygon") {
        imageSrc = polygon; // Update with the actual path to your polygon image in the public folder
    } else if (chain === "ethereum") {
        imageSrc = "/images/ethereum.png"; // Update with the actual path to your ethereum image in the public folder
    } else if (chain === "bnb") {
        imageSrc = "/images/bnb.png"; // Update with the actual path to your bnb image in the public folder
    } else {
        imageSrc = "/images/default.png"; // Provide a default image path or handle other cases
    }

    return imageSrc;
}

//add this style in one of the styles page 


export default function Card(props){
    const imageStyle = {
        borderRadius: '50%',
        border: '1px solid #fff',
      }
    
    const separator = {
        width: '2px',
        height: '20px', /* Adjust the height as needed */
        backgroundColor: 'white', /* Color of the separator line */
       /* Adjust the margin as needed */
    }
    
    
    const {title,description,chain,nextPageUrl,amount,EndDate,currency} = props

    const value = getImageSource(currency)
    const image = getChainImage(chain)

    return (
        <>
            <div className="card bg-capx-black w-[241px] h-[251px] rounded hover:border border-capx-green ">
                <div className="card-title flex flex-row ">
                    <Image src={image} width={50} height={50} alt={"capx chain"} style={imageStyle}  />
                    <h5 className="pl-4">{title}</h5>
                </div>
                <div className="card-body flex flex-col px-[0px] justify-items-center items-center">
                    <p className="text-sm">{description}</p>
                    <div className="flex flex-row">
                        <div className="flex flex-row mr-2">
                            <Image src={value} width={18} height={18} style={imageStyle}/>
                            <p className="ml-2 text-sm">{amount} {currency}</p>
                        </div>
                        <div className="" style={separator}></div>
                        <p className="pl-2 text-sm">Closing in {EndDate}</p>
                    </div>
                    <div className=" mt-8 justify-items-center items-center">
                        <button className="bg-button-black hover:border w-[86px] h-[28px]">Apply</button>
                    </div>
                   
                </div>
            </div>

        </>
    )
}