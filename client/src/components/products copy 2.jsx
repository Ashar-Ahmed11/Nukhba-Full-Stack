import React from 'react'
import { useContext, useState, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'
import WalletItem from './productItem copy'
import Spinner from './spinner'


export default function WalletList({slug}) {
    const context = useContext(NoteContext)
    const { fetchProduct, products, fetchCart, loader, productLoader, sliderRef,postsPerPage,firstItemIndex,lastItemIndex } = context
    useEffect(() => {
        fetchProduct()

        fetchCart()
    }, [])


    const [first, setfirst] = useState("second")
    useEffect(() => {
        setfirst("third")
    }, [])


    const newSlug = slug
    console.log(slug)

    const wallet = products.filter((e) => { return e.categories[0].slug == newSlug })
    const reversed = [...wallet].reverse();
    // console.log(products)
    // console.log(wallet)

    

    const color = "#F4B92D"
    return (
    <div className='my-5'>
        
            <div className={window.innerWidth > 750 && "m-3"}>

                <div className="mycontainer-fluid">
                    {productLoader && <div style={{ position: "fixed", bottom: "-30px", right: "-25px", zIndex: "99999" }}><Spinner /></div>}
                    <div className="row">
                        {reversed.map((e) => {
                            return <WalletItem data={e} />
                        })}
                    



                    </div>
                    

                </div>


            </div>
        </div>
    )
}