import React from 'react'
import { useRef } from 'react'
import ImageAdjuster from './imageAdjuster'
import NoteContext from '../../context/notes/noteContext'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function CreateProduct() {
    const openModal = useRef(null)
    const history = useNavigate(null)
    const context = useContext(NoteContext)
    const { asset, createProduct, setModalIsOpen, modalRef, setAsset, setImgPreview, imgPreview } = context
    const [components, setComponents] = useState({ namer: "", price: "" })
    const dispatchProduct = (e) => {
        e.preventDefault()
        createProduct(components.namer, components.price)
    }
    const color = "#F4B92D"
    const token = localStorage.getItem('auth-token')
    if (!token) {
        history('/admin')
    }
    return (
        <div>
            <div style={{ marginTop: `${window.innerWidth > 992 ? '200px' : '145px'}` }}>
                <div className="d-flex justify-content-center  py-3">
                    <h1 style={{ fontFamily: "Sagrantino", color: color }}>Create Product</h1>
                </div>
                <div className="container">
                    <form>

                        <input value={components.namer} onChange={(e) => setComponents({ ...components, namer: e.target.value })} style={{ color: color, backgroundColor: '#000000', borderColor: color }} type="text" placeholder='Product Name' className="form-control my-2" />
                        <input value={components.price} onChange={(e) => setComponents({ ...components, price: e.target.value })} style={{ color: color, backgroundColor: '#000000', borderColor: color }} type="text" placeholder='Product Price' className="form-control my-2" />
                        <div>
                            {!asset ? <button onClick={(e) => { e.preventDefault(); openModal.current.click() }} style={{ borderColor: color, color: color }} className="btn">Upload Image</button>
                                : <>
                                    <button onClick={(e) => { e.preventDefault(); openModal.current.click() }} style={{ borderColor: color, color: color }} className="btn mx-2">Reupload Image</button>
                                    <button onClick={() => { setAsset(null); setImgPreview(null) }} style={{ borderColor: color, color: color }} className="btn mx-2">Remove Image</button>
                                </>
                            }

                            {imgPreview && <div className="card my-2" style={{ width: 'max-content', border: `1px solid ${color}` }}>
                                <div className="card-img">
                                    <img height="309px" src={imgPreview} alt="" />
                                </div>
                            </div>}
                           
                        </div>
                        <div className="d-flex justify-content-end my-3">
                            <button disabled={!asset && 'true'} onClick={(e) => dispatchProduct(e)} style={{ borderColor: color, color: color }} className="btn my-2">Upload Product</button>
                        </div>
                    </form>
                </div>

            </div>








            <button ref={openModal} hidden={true} onClick={() => setModalIsOpen(true)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFOR">
                Launch demo modal
            </button>


            <div class="modal fade" id="exampleModalFOR" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ImageAdjuster />
                        </div>
                        <div class="modal-footer">
                            <button ref={modalRef} onClick={() => setModalIsOpen(false)} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}