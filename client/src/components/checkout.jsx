import React from 'react'
import Logo from './nukhbaLogo.png'
import CheckoutItem from './checkoutItem'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import { useEffect } from 'react'
import { useState } from 'react'
import Spinner from './spinner.jsx'
export default function Checkout() {
    const context = useContext(NoteContext)
    const { cart, fetchCart, setMainLoader,sendWhatsappMessage,checkoutLoader } = context
    useEffect(() => {

        fetchCart()
     

    }, [])
   
    const color = "#F4B92D"
    const products = cart.line_items.map((element)=>{return   element.quantity+"x "+element.name+" "})
    const finalProducts = {...products}
    const [form, setForm] = useState({firstname:"",lastname:"",email:"",phone:"", address:"",city:"",products:finalProducts})

    const declareMessage=(e)=>{
        e.preventDefault()
        sendWhatsappMessage(form.firstname+" "+form.lastname,form.email,form.phone,products,form.address,form.city,theSubtotal,cart.subtotal.formatted_with_symbol)
    }

    // const total = cart.line_items.subtotal.formatted_with_code
    // console.log(parseInt(total))
   
    const total = cart.subtotal.raw+250

    const theSubtotal = "Rs"+total.toString()+".00"
  
  

    return (
        <div className='mb-5'>
           {checkoutLoader && <div style={{ position: "fixed", bottom: "-30px", right: "-25px", zIndex: "99999" }}><Spinner /></div>}
            <div className="d-flex justify-content-center my-3">
                <img src={Logo} style={{ width: '80px' }} alt="" />
            </div>
            <div className="container">
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <div style={{ width: '100%' }} className="d-flex justify-content-between">
                            <div>
                                <button class="navbar-toggler pt-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: 'none' }}>
                                    <p style={{ fontSize: '24px', color: '#a38235', marginBottom: '5px' }}>Show order summary</p>
                                    <i class="fa fa-chevron-down text-center" style={{ color: '#a38235' }} aria-hidden="true"></i>
                                </button>
                            </div>
                            <div><h1 style={{ color: '#F4B92D', fontSize: "28px" }} className='pt-3 mx-3'>{theSubtotal}</h1></div>
                        </div>
                    </div>
                </nav>
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <div>

                            {cart.line_items.map((element) => {
                                return <  CheckoutItem element={element} />
                            })}
                        </div>
                        <div className='mt-4' style={{ color: '#F4B92D' }}>
                            <div className="d-flex justify-content-between">
                                <p>Subtotal</p>
                                <p>{cart.subtotal.formatted_with_symbol}</p>
                            </div>
                            <div style={{ borderBottom: '1px solid #F4B92D' }} className="d-flex justify-content-between">
                                <p>Shipping</p>
                                <p>Rs250</p>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <p>Total</p>
                                <p>{theSubtotal}</p>
                                
                            </div>

                        </div>
                    </div>
                </div>
                <div className='container-fluid my-3'>
                    <form onSubmit={(e)=>declareMessage(e)}>
                        <div class="mb-3">
                            <p className='my-2' style={{ fontSize: '25px', color: 'white' }} >Contact information</p>
                            <input required value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder='Email' style={{ backgroundColor: '#000000', borderColor: color, color: 'white' }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <p className='my-2' style={{ fontSize: '25px', color: 'white' }} >Shipping address</p>


                            <select  required placeholder='Country/Region' style={{ backgroundColor: '#000000', borderColor: color, color: 'white' }} class="form-select" aria-label="Default select example">
                                <option selected>Country/Region</option>
                                <option value="1">Pakistan</option>

                            </select>

                            <div className="d-flex justify-content-between my-4">
                                <input  required value={form.firstname} onChange={(e)=>setForm({...form,firstname:e.target.value})}  placeholder='First Name' style={{ backgroundColor: '#000000', borderColor: color, color: 'white' }} type="text" class="form-control mx-1"  />
                                <input  required value={form.lastname}  onChange={(e)=>setForm({...form,lastname:e.target.value})} placeholder='Last Name' style={{ backgroundColor: '#000000', borderColor: color, color: 'white' }} type="text" class="form-control mx-1"  />
                            </div>
                            <div className="d-flex  my-4">
                                <input  required value={form.address}   onChange={(e)=>setForm({...form,address:e.target.value})} placeholder='Address' style={{ backgroundColor: '#000000', borderColor: color, color: 'white' }} type="text" class="form-control mx-1"  />

                            </div>
                            <div className="d-flex justify-content-between my-4">
                                <input  required value={form.city}   onChange={(e)=>setForm({...form,city:e.target.value})}  placeholder='City' style={{ backgroundColor: '#000000', borderColor: color, color: 'white' }} type="text" class="form-control mx-1"  />
                                <input  required  placeholder='Postal Code' style={{ backgroundColor: '#000000', borderColor: color, color: 'white' }} type="text" class="form-control mx-1"  />
                            </div>
                            <div className="d-flex  my-4">
                                <input  required  value={form.phone}   onChange={(e)=>setForm({...form,phone:e.target.value})} placeholder='Postal Code' style={{ backgroundColor: '#000000', borderColor: color, color: 'white' }}  placeholder='WhatsApp Number' style={{ backgroundColor: '#000000', borderColor: color, color: 'white' }} type="text" class="form-control mx-1"  />

                            </div>



                        </div>
                        <div>
                            <p className='my-2' style={{ fontSize: '25px', color: 'white' }} >Shipping method</p>
                            <div style={{ border: '1px solid #F4B92D', borderRadius: '0.375rem' }} class="form-check d-flex justify-content-between">
                                <div style={{ marginLeft: ' -22px', marginTop: '7px' }}>
                                    <i style={{ color: '#F4B92D' }} class="fa fa-check-circle mx-2" aria-hidden="true"></i>
                                    <label style={{ color: 'white' }} class="form-check-label" for="flexRadioDefault2">
                                        Shipping
                                    </label>
                                </div>
                                <div>
                                    <p style={{ color: 'white' }} className='m-2'>Standard</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='my-2' style={{ fontSize: '25px', color: 'white' }} >Payment method</p>
                            <div style={{ border: '1px solid #F4B92D', borderRadius: '0.375rem', paddingBottom: '10px' }} class="form-check d-flex justify-content-between">
                                <div style={{ marginLeft: ' -22px', marginTop: '7px' }}>
                                    <i style={{ color: '#F4B92D' }} class="fa fa-check-circle mx-2" aria-hidden="true"></i>
                                    <label style={{ color: 'white' }} class="form-check-label" for="flexRadioDefault2">

                                        Cash on Delivery (COD)
                                    </label>
                                </div>

                            </div>
                        </div>



                        <div className="d-flex justify-content-between my-3">

                            <button style={{ padding: '16.5px', backgroundColor: '#000000', border: 'none', color: color }} class="btn"><i class="fa fa-chevron-left px-2" aria-hidden="true"></i>Return</button>
                            <button disabled={checkoutLoader&&'true'} type='submit' style={{ padding: '16.5px', backgroundColor: '#000000', borderColor: color, color: color }} class="btn">Place Order</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}