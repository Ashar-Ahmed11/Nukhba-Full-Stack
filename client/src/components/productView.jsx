import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import { useState } from 'react'
import Spinner from './spinner'
import ReactPlayer from 'react-player'
import { useEffect } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useParams } from 'react-router-dom'
import { Image,Transformation } from 'cloudinary-react'

import BarLoader from 'react-spinners/BarLoader'
import ThumbnailPlugin from './thumbnailPlugin'
export default function ProductView() {
  
  const { productid } = useParams()
  useEffect(() => {
  
    getProduct(productid)
  }, [])

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider(

    {
      initial: 0,
      slides: {
        origin: "center",
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )



  const context = useContext(NoteContext)

  const { productView, addProduct, productLoader, getProduct, setMainLoader } = context
  // console.log(productView)
  const { name, price, image, id, assets, description, thank_you_url } = productView
  const [quantity, setQuantity] = useState(1)
  if (quantity < 1) {
    setQuantity(1)
  }
  const color = "#F4B92D"
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior: "instant"})
  }, [])

  if (name == "") {
    setMainLoader(true)
  }

  // console.log(productView)
  const [imgLoaded, setimgLoaded] = useState(false)
console.log(thank_you_url)
  return (
    <div key={productView.image} style={{ marginTop: `${window.innerWidth > 992 ? '100px' : '57px'}` }}>
      <div className='d-flex justify-content-center my-5' >
        {productLoader && <div style={{ position: "fixed", bottom: "-30px", right: "-25px", zIndex: "99999" }}><Spinner /></div>}
        <div className="card mb-3" style={{ backgroundColor: "#000000" }} >
          <div className="row g-0">
            <div className="col-md-6">
              <div className="">
                {/* <div style={{ overflow: 'hidden' }}>
                  <img key={element.url} style={{ width: "100%", transform: 'scale(1.9)' }} src={image.url} className="img-fluid rounded-start" alt="..." />
                </div> */}
                {id !== "" && <>
                  <div>
                    <div ref={sliderRef} className="keen-slider" style={{ display: "flex", alignItems: 'center' }}>
                      {assets.slice(assets.length > 1 && 1).map((element) => {
                        return <div className='keen-slider__slide number-slide'>
                          <div className='d-flex justify-content-center' style={{ position: 'absolute' ,zIndex: 99999999, opacity: imgLoaded && '0',alignItems:"center",width:"100%",height:"100%" }}>
                            <BarLoader color="#F4B92D" />
                          </div>
                          {/* <img onLoad={() => setimgLoaded(true)} key={element.url} style={{ width: "100%", transform: "scale(1.2)" }} src={element.url} alt="" /> */}
                        
                          <div   key={element.url}   onLoad={() => setimgLoaded(true)}  style={{ width: "100%"}}>
                        <Image cloudName="dextrzp2q"  className="card-img-top" key={element.url} publicId={element.url} type="fetch">

	<Transformation fetchFormat="avif" />
	<Transformation aspectRatio="16:9" crop="pad" background="black" />
	<Transformation quality="60" />
</Image>
</div>
                        </div>
                      })}
                    </div>

                    <div ref={thumbnailRef} className="keen-slider thumbnail" >
                      {assets.length > 1 && assets.slice(1).map((element) => {
                        return <div className='keen-slider__slide number-slide' style={{ display: "flex", alignItems: 'center' }}>
                          <div className='d-flex justify-content-center' style={{ position: 'absolute' ,zIndex: 99999999, opacity: imgLoaded && '0',alignItems:"center",width:"100%",height:"100%" }}>
                            <BarLoader color="#F4B92D" />
                          </div>
                          {/* <img key={element.url} style={{ width: "100%" }} src={element.url} alt="" /> */}
                          <div   style={{ width: "100%" }}>
                        <Image cloudName="dextrzp2q"  className="card-img-top" key={element.url} publicId={element.url} type="fetch">
                        <Transformation aspectRatio="16:9" crop="pad" background="black" />
	<Transformation fetchFormat="avif" />
	<Transformation quality="60" />
</Image>
</div>
                          </div>
                      })}
                    </div>
                  </div>
                </>}
                {/* 
                <div class="embed-responsive embed-responsive-16by9 my-3">
  <iframe width="100%" height="300px" class="embed-responsive-item" src="https://www.youtube.com/embed/w2veLe03SbQ?autoplay=1&mute=1&controls=0&showinfo=0&start=50&enablejsapi=1&&widgetid=3" style={{pointerEvents: 'none'}} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
</div> */}

                {thank_you_url && <div style={{overflow:"hidden",pointerEvents:'none'}} className="my-3">

                  <div style={{ width: "100%" }}>
                    <ReactPlayer

                      width="100%"
                      loop="true"
                      playing={true}
                      config={{
                        youtube: {
                          playerVars: {
                            autoplay: 1,
                            mute: 1,
                            controls: 0,
                            disablekb: 1,
                            loop: 1,
                            rel: 0,
                            showInfo:0,
                          }
                        }
                      }}
                      url={thank_you_url}
                      controls={false}
                      muted={true}
                    />
                  </div>


                </div>}



                

              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <p style={{ color: color, fontFamily: 'Sagrantino', fontSize: '30px' }} className="card-title p-3">{name}</p>

                <p style={{ color: color, fontSize: '23px' }} className='p-3'>{price.formatted_with_symbol}</p>

                <div className="d-flex p-3 justify-content-between px-3 mx-2">

                  <div className='my-2'><p style={{ color: color }}>Quantity</p></div>
                  <div className='d-flex'>

                    <i onClick={() => setQuantity(quantity - 1)} style={{ fontSize: "25px", color: color }} class="fa fa-minus-square-o my-2" aria-hidden="true"></i>
                    <p className='mx-2' style={{ fontSize: "25px", color: color }}>{quantity}</p>
                    <i onClick={() => setQuantity(quantity + 1)} style={{ fontSize: "25px", color: color }} class="fa fa-plus-square-o my-2" aria-hidden="true"></i>
                  </div>

                </div>

                <div className="p-3 d-flex">
                  <button style={{ backgroundColor: "#000000", color: color, borderColor: color, width: "100%", borderRadius: "10px" }} onClick={() => addProduct(id, quantity)} className="btn">Add to cart</button>
                </div>
                <div className='p-3'>
                  <p style={{ fontSize: "16.5px", color: "#B18314", textDecoration: "underline" }}>Description</p>

                  <div style={{ color: color, fontSize: "17.6px" }} dangerouslySetInnerHTML={{ __html: description }}></div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}