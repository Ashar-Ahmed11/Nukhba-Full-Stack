import React from 'react'
import NoteContext from '../context/notes/noteContext'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MoonLoader from 'react-spinners/MoonLoader'
import { Image,Transformation } from 'cloudinary-react'
import ScrollAnimation from 'react-animate-on-scroll'
export default function ProductItem({ data }) {
    const context = useContext(NoteContext)
    const { addProduct, getProduct, setMainLoader,refreshPage } = context
    const { name, image, price, description, id,permalink,sku,quantity } = data

    const [scaler, setScaler] = useState("2.15")
    useEffect(() => {

        if (name == "Leather Wallet for Men in Black Color") {
            setScaler("2.6")
        }
        if (name == "Leather Wallet for Men in Dark Brown Color") {
            setScaler("2.5")
        }
        if (name == "Leather Wallet for Men in Dark Camel Color") {
            setScaler("2.1")
        }
        if (name == "Reversible Brown and Black Belt for Men") {
            setScaler("1.25")

        }
        if(name.match("Cross Body Messenger Bag")){
            setScaler("1.7")
        }
        if (name.match("Handbag")) {
            setScaler("1.5")

        }

        if (name.match("Mild Brown Pull Up Leather Coat Wallet")) {
            setScaler('1.7')
        }
        if (name.match("Crocodile Leather Ladies Clutch in Antique Maroon Color")) {
            setScaler('1.7')
        }
        if(name.match("Plain Cow Leather Ladies Clutch")){
            setScaler('1.65')
        }

        if(name.match("Mild Brown Pull Up Leather Coat Wallet")){
            setScaler('1.9')
        }

        if(image.created_at>=1680084588)
        {
            setScaler("0.82")
        }



    }, [])

   

    
    const [imgLoader, setImgLoader] = useState(false)


    const color = "#F4B92D"

  
    // formatted_with_symbol
    return (
        
        <div
            data-aos={window.innerWidth > 750 && `fade-right`}
            data-aos-delay={window.innerWidth > 750 && "10"}
            data-gird-slide
            data-aos-duration={window.innerWidth > 750 && "800"}
            data-aos-easing={window.innerWidth > 740 && "ease-out-quart"}

            className={window.innerWidth > 750 ? 'col-lg-3 col-md-4 col-6 my-2 ' : 'mx-2'} style={{ cursor: 'pointer' }}>
           <Link  onClick={()=>refreshPage()} state={{textDecoration:"none"}} to={`product/${id}`}> <div  className="card" style={{ backgroundColor: "#000000" }}>
           {sku&&<div class="ribbon ribbon-top-left"><span>{sku}% OFF</span></div>}
                <div style={{ overflow: 'hidden' }}>
                    <div style={{ transform: 'scale(1.3)', overflow: 'hidden', height: '309px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                 
                    <div style={{position:'absolute',top:"17%",zIndex:99999999,opacity:imgLoader&&'0'}}>
  <MoonLoader color="#F4B92D" />
  </div>
                        {/* <img onLoad={()=>setImgLoader(true)}  style={{ transform: `scale(${scaler})` }} src={image.url} className={`card-img-top image ${imgLoader&&'image-loaded'}`} alt="..." /> */}
                   

                   
<div   key={image.url}   onLoad={()=>setImgLoader(true)}  style={{ transform: `scale(${scaler})` }} src={image.url} className={`card-img-top image ${imgLoader&&'image-loaded'}`}>
                        <Image cloudName="dextrzp2q"  className="card-img-top" key={image.url} publicId={image.url} type="fetch">

	<Transformation fetchFormat="avif" />
	<Transformation quality="60" />
</Image>
</div>
                    
                    </div>
                </div>
                <div className="card-body text-center">
                    <p style={{ color: color, fontSize: '17.6px', margin: '0px 0px 4px' }} className="card-title">{name}</p>
                     {sku?<div className="d-flex justify-content-center">           
                    <strike style={{color:color,fontWeight:'bolder'}}><p style={{ color: '#ad7d0b', fontSize: '15.84px' }} className="card-text mx-2">{"Rs"+quantity.toLocaleString('en-US')+'.00'}</p></strike>
                   <p style={{ color: color, fontSize: '15.84px',fontWeight:'bold' }} className="card-text">{data.price.formatted_with_symbol}</p>
                    </div>: <p style={{ color: color, fontSize: '15.84px' }} className="card-text">{data.price.formatted_with_symbol}</p>}
                </div>
            </div>
            </Link>
        </div>
    )
}