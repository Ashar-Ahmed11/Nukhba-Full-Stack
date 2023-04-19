import React from 'react'
import ashar from './asharimg.jpg'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
export default function CartItem({ data }) {
    const context = useContext(NoteContext)
    const {updateProduct,removeProduct} = context
    // formatted_with_symbol
    const { image, name, quantity, price,id } = data
    const color = "#F4B92D"
    return (
        <div>
            <div className="card mb-3" style={{backgroundColor:"#000000", maxWidth: "540px", maxHeight: "200px",borderColor:color }}>
                <div className="row">
                    <div className="col-4">
                        <img src={image.url} className="img-fluid  mx-3 my-5" alt="..." />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 style={{color:color}} className="card-title my-3">{name}</h5>
                            <div className="d-flex">
                                <button h5 style={{borderColor:color,color:color}}  onClick={()=>updateProduct(id,quantity-1)} className="btn">-</button>
                            <p h5 style={{color:color}} className="card-text mx-2">{quantity}</p>
                            <button h5 style={{borderColor:color,color:color}} onClick={()=>updateProduct(id,quantity+1)} className="btn">+</button>
                            </div>
                            <p  style={{color:color}} className="card-text py-2">{price.formatted_with_symbol}</p>

                        </div>
                    </div>
                </div>
                <h4 onClick={()=>removeProduct(id)} style={{position:'absolute',right:'10px',top:'10px',cursor:'pointer',color:color}}>X</h4>
            </div>
        </div>
    )
}