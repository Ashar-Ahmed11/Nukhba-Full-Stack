import React from 'react'
import NoteContext from '../context/notes/noteContext'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MoonLoader from 'react-spinners/MoonLoader'
import { avif } from '@cloudinary/url-gen/qualifiers/format'
import { useLocation } from 'react-router-dom'
import useLocalStorage from './useLocalStorage'
import { CloudinaryImage } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { Image,Transformation } from 'cloudinary-react'
import { format } from '@cloudinary/url-gen/actions/delivery'
import ScrollAnimation from 'react-animate-on-scroll';

export default function WalletItem({ data }) {
    const location = useLocation()
    const context = useContext(NoteContext)
    const { addProduct, getProduct, refreshPage } = context
    const { name, image, price, description, id,sku } = data
    console.log(parseInt(sku))
    const [scaler, setScaler] = useState("2.15")
   
// const [transformedUrl, setTransformedUrl] = useState("")
//    const getImage = ()=>{
//     const imager =  new CloudinaryImage(image.url).delivery(format(avif())).resize(scale().height(100))

//     console.log(imager)
//     setTransformedUrl(imager.publicID)
// }

// useEffect(() => {
//   getImage()
// }, [image.url])

    
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
        if (name.match("Handbag")) {
            setScaler("1.5")

        }
        if (name.match("Plain Cow Leather Ladies Clutch")) {
            setScaler('1.65')
        }
        if (name.match("Mild Brown Pull Up Leather Coat Wallet")) {
            setScaler('1.9')
        }
        if (name.match("Dark Brown Pull Up Leather Coat Wallet")) {
            setScaler('1.9')
        }
        if (name.match("Dark Blue Pull Up Leather Coat Wallet")) {
            setScaler('1.9')
        }
        if (name.match("Light Brown Pull Up Leather Coat Wallet")) {
            setScaler('1.9')
        }
        if (name.match("Grain Cow Leather Passport Cover")) {
            setScaler('1.9')
        }

        if (data.seo.title == "thezoomedpicture" || image.created_at >= 1680084588) {
            setScaler("1")
        }

        else {
            setScaler('2.15')
        }



    }, [data])

    const [imgLoader, setImgLoader] = useState(false)

    const color = "#F4B92D"

    useEffect(() => {
        setImgLoader(false)
        setHeight('300px')
        if (imgHeight == false || !imgHeight) {
            setHeight('max-content')
        }
    }, [image.url])


    const [height, setHeight] = useState('max-content')
    const [checker, setChecker] = useState(null)
    const imgHeight = checker && imgLoader && '300'
    // console.log(imgHeight)
    // const [imageSourceUrl, setImageSourceUrl] = useState("");

    // const downloadImageAndSetSource = async (imageUrl) => {
    //     const image = await fetch(imageUrl);
    //     const finalImage = await image.blob()
    
    //     setImageSourceUrl(finalImage)
    // }
    // useEffect(() => {
    //     // !imgHeight?'300px':'max-content'

    //    downloadImageAndSetSource(`https://res.cloudinary.com/demo/image/fetch/f_avif/${image.url}`)
       


    // },[image.url])


    // console.log(imageSourceUrl)

    // formatted_with_symbol



    // const relDiff=(etalon, example)=> {
    //     return  +Math.abs(100 - example / etalon * 100).toFixed(10);
    //   }
    //    // example
    //    console.log(relDiff(600, 300))
    console.log()
    return (
        
        <div
            key={image.url}
            data-aos={`fade-right`}
            data-aos-delay={"10"}
            data-gird-slide
            data-aos-duration={"800"}
            data-aos-easing={"ease-out-quart"}
            className={'px-1 col-md-4 col-6 my-2'} style={{ cursor: 'pointer' }}>
            <Link onClick={() => refreshPage()} to={`/product/${id}`}><div className="card" data-label={sku&&`${sku}% Off`} style={{ backgroundColor: "#000000" }}>
            {sku&&<div class="ribbon ribbon-top-left"><span>{sku}% OFF</span></div>}
                <div style={{ overflow: 'hidden' }}>
                    <div style={{ overflow: 'hidden', height: 'max-content', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: "1s ease", height: checker || imgLoader ? 'max-content' : '300px' }}>
                        {!imgLoader && <div style={{ position: 'absolute', zIndex: 99999999, opacity: checker || imgLoader ? '0' : '1' }}>
                            <MoonLoader color="#F4B92D" />
                        </div>}
                      
                        
                        {/* <img type="" id='thatImage' key={image.url} loading="lazy" onLoad={(e) => { setImgLoader(true); setHeight('max-content'); e.target.alt = 'hello'; setChecker(e.target.alt) }} src={`https://res.cloudinary.com/dextrzp2q/image/fetch/f_avif/${transformedUrl}`} style={{ transform: `scale(${scaler})` }}  className={`card-img-top `} alt="..." /> */}
                  

<div   key={image.url}  onLoad={(e) => { setImgLoader(true); setHeight('max-content'); e.target.alt = 'hello'; setChecker(e.target.alt);e.target.loading = 'lazy';e.target.onLoad = setImgLoader(true) }}  style={{ transform: `scale(${scaler})` }}  className={`card-img-top `}>
                        <Image cloudName="dextrzp2q"  className="card-img-top" key={image.url} publicId={image.url} type="fetch">
                        <Transformation aspectRatio="1:1" crop="pad" background="black" />
                        
	<Transformation fetchFormat="avif" />
	<Transformation quality="60" />
</Image>
</div>


                    </div>
                </div>
                <div className="card-body text-center">
                    <p style={{ color: color, fontSize: '17.6px', margin: '0px 0px 4px' }} className="card-title">{name}</p>
                    {sku?<div className="d-flex justify-content-center">           
                    <strike style={{color:color,fontWeight:'bolder'}}><p style={{ color: '#ad7d0b', fontSize: '15.84px' }} className="card-text mx-2">{"Rs"+data.inventory.available.toLocaleString('en-US')+'.00'}</p></strike>
                   <p style={{ color: color, fontSize: '15.84px',fontWeight:'bold' }} className="card-text">{data.price.formatted_with_symbol}</p>
                    </div>: <p style={{ color: color, fontSize: '15.84px' }} className="card-text">{data.price.formatted_with_symbol}</p>}
                </div>
            </div>
            </Link>
        </div>
    )
}