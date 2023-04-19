import React from 'react'
import { useContext, useState, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'
import ProductItem from './productItem'
import Spinner from './spinner'

export default function Products() {
    const context = useContext(NoteContext)
    const { getHomeProducts,homeProducts,setText,setComponent,fetchProduct, products ,fetchCart, loader, productLoader,sliderRef,homeData,editor,editComponent,adminView } = context
    useEffect(() => {
        getHomeProducts()
        fetchCart()
    }, [])
  
    

  
    const [first, setfirst] = useState("second")
 useEffect(() => {
   setfirst("third")

 }, [])
//  console.log(homeProducts)
//  console.log(products)

//  console.log(adminView)


    const wallet = products.filter((e) => { return e.categories[0].slug == ['featured'] })

    // console.log(products)
    // console.log(wallet)
    const color = "#F4B92D"
    const reversed = [...products].reverse();
    return (
        <div>
            <div className={window.innerWidth > 750 && "m-3"}>

                <p data-aos="fade-up"  data-aos-duration="1000" onClick={(e) =>{if(adminView){setText(e.target.innerText);editComponent();setComponent('firstHeading')}}} className="h1 text-center my-5" style={{ fontFamily: 'Sagrantino', color: color }}>{homeData.firstHeading}</p>
                {productLoader && <div style={{ position: "fixed", bottom: "-30px", right: "-25px", zIndex: "99999" }}><Spinner /></div>}
                {window.innerWidth > 750 ? <div className="row">
                    {homeProducts.map((e) => {
                        return <ProductItem data={e} />
                    })}




                </div> :


                
                    <div ref={sliderRef} className="keen-slider">
      

                    {homeProducts.map((e) => {
                            return <div className="keen-slider__slide number-slide"><ProductItem data={e} /> </div>
                        })}

                  </div>


                }
            </div>
        </div>
    )
}