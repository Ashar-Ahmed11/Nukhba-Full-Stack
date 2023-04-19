import React from 'react'
import { useContext, useState, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'
import ProductItem from './productItem'
import Spinner from './spinner'

export default function FeaturedOnes() {
    const context = useContext(NoteContext)
    const { getHomeProducts, homeProducts, fetchCart, loader,setText, productLoader,sliderRefTwo,homeData,adminView,editComponent,setComponent} = context
    useEffect(() => {
        getHomeProducts()
        fetchCart()
    }, [])

    
    
      


    const color = "#F4B92D"

    
    return (
        <div>
                 <div className={window.innerWidth>750&&"m-3"}>

                <p   data-aos="fade-up"  data-aos-duration="1000" onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('secondHeading')}}} className="h1 text-center my-3" style={{ fontFamily: 'Sagrantino', color: color }}>{homeData.secondHeading}</p>
                <div   data-aos="fade-up"  data-aos-duration="1000" className="d-flex justify-content-center">
                    <button className="btn" style={{ borderRadius: "100px", backgroundColor: "#000000", color: color, width: 'max-content', borderColor: color }}>TOP SELLERS</button>
                </div>
                {productLoader && <div style={{ position: "fixed", bottom: "-30px", right: "-25px", zIndex: "99999" }}><Spinner /></div>}
                {window.innerWidth > 750 ? <div className="row my-5">

                    {homeProducts.map((e) => {
                        return <ProductItem data={e} />


                    })}

                </div> :
                   
                   
                   <div ref={sliderRefTwo} className="keen-slider my-5">
      

                   {homeProducts.map((e) => {
                           return <div className="keen-slider__slide"><ProductItem data={e} /> </div>
                       })}

                 </div>
}

            </div>
        </div>
    )
}