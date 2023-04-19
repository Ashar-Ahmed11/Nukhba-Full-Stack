import React, { useContext } from 'react'

import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import NoteContext from '../context/notes/noteContext'






export default function AdminEditor() {
    const closeRef = useRef(null)
    const context = useContext(NoteContext)
    const { setCatyEditor,setCatyImageEditor,adminView,catyEditor,setLoginLoader,carousalEditor,getHomeData,catyImageEditor, myRef, text, setText,categorial, Component,categoryEditor, editor,cloudinary,imageEditor,setImageEditor,setComponent,footerImage,setCarousalEditor,setFooterImage } = context

    useEffect(() => {
        getHomeData()
        setLoginLoader(false)
    }, [])

    
   

    const token = localStorage.getItem('auth-token')

   

    const [buttonActive, setButtonActive] = useState(true)



    const closeButton = ()=>{
        closeRef.current.click()
        setImageEditor(false)
        setCarousalEditor(false)
        setFooterImage(false)
        setText('Hello')
    }

    const color = "#F4B92D"
    return (
        adminView && <div style={{ marginTop: `${window.innerWidth > 992 ? '100px' : '57px'}` }}>


         
            <button hidden="true" ref={myRef} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="container">
                <div style={{ padding: '0px', zIndex: '2147483647' }} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog py-5">
                        <div class="modal-content ">
                            <div style={{ borderBottomColor: '#f88234' }} class="modal-header">
                                {imageEditor?<h1 class="modal-title fs-5" id="exampleModalLabel">Update Image</h1>
                                :<h1 class="modal-title fs-5" id="exampleModalLabel">{text}</h1>}
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div style={{ borderBottomColor: '#f88234' }} class="modal-body">
                                <div class="mb-3">
                                    {carousalEditor&&<div className="d-flex justify-content-center my-2">
                                        <button style={{borderColor:'#f88234'}} onClick={()=>{setButtonActive(true);setComponent(`${!footerImage?'mainCarousalImgDesktop':'footerCarousalImgDesktop'}`)}} className={` mx-2 ${buttonActive?'btnActive':'btnSada'}`}>Desktop</button>
                                        <button style={{borderColor:'#f88234'}} onClick={()=>{setButtonActive(false);setComponent(`${!footerImage?'mainCarousalImgPhone':'footerCarousalImgPhone'}`)}} className={` mx-2 ${!buttonActive?'btnActive':'btnSada'}`}>Phone</button>
                                    </div>}
                                 { !imageEditor?  <input value={text} onChange={(e) => { setText(e.target.value) }} style={{ color: "white", backgroundColor: "#000000", border: '1px solid #f88234' }} type="text" class="form-control" placeholder="Edit/Update" />
                                    :< div className='d-flex justify-content-center flex-column pt-2'>
                                        <div className="d-flex justify-content-center">
                                        
                                        <input style={{color:'#e2af26'}} type="file" onChange={(e)=>{setText(e.target.files[0])}} />
                                        </div>
                                    <p style={{fontSize:'30px',fontFamily:'Sagrantino'}} className='text-center mt-2 pt-2'>Instructions</p>
                                    <ol>
                                        <li>First select the required viewport from above from the two buttons consisting of Desktop and Phone</li>
                                        <li>The image dimension of desktop image must be 1700x900px</li>
                                        <li>The image dimension of phone image must be 900x1200px</li>
                                        <li>The image dimension of the body image that is situated at the middle of the website must be 900x1200px</li>
                                        <li>The image dimension of the product images must be 613x407px</li>
                                    </ol>
                                    </div>}
                                </div>
                            </div>
                            <div style={{ borderTopColor: '#f88234' }} class="modal-footer">
                                <button ref={closeRef} onClick={()=>{closeButton()}} style={{ backgroundColor: "#000000", borderColor: '#f88234', color: '#f88234' }} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                               
                               { catyEditor ? <button onClick={() => {catyImageEditor?cloudinary(Component, text):categoryEditor(Component, text,categorial);setImageEditor(false);setCatyEditor(false);setCatyImageEditor(false);setCarousalEditor(false);setFooterImage(false);setText('Hello');closeRef.current.click()}} style={{ backgroundColor: "#000000", borderColor: '#f88234', color: '#f88234' }} type="button" class="btn">Save changes</button> : !imageEditor?<button onClick={() => {editor(Component, text);setImageEditor(false);setCarousalEditor(false);setFooterImage(false);setText('Hello');closeRef.current.click()}} style={{ backgroundColor: "#000000", borderColor: '#f88234', color: '#f88234' }} type="button" class="btn">Save changes</button>
                                :<button onClick={() => {cloudinary(Component, text);setImageEditor(false);setCarousalEditor(false);setFooterImage(false);setText('Hello');closeRef.current.click()}} style={{ backgroundColor: "#000000", borderColor: '#f88234', color: '#f88234' }} type="button" class="btn">Save changes</button>}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         

        </div>
    )
}