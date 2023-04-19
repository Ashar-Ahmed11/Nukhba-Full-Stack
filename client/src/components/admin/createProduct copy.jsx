import React from 'react'
import { useRef } from 'react'
import ImageAdjuster from './imageAdjuster'
import NoteContext from '../../context/notes/noteContext'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function CreateCategory() {
    const openModal = useRef(null)
    const history = useNavigate(null)
    const context = useContext(NoteContext)
    const {createCategory } = context
    const [categoryName, setCategoryName] = useState("")
    const makeCategory = (e)=>{
        e.preventDefault()
        createCategory(categoryName)
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
                    <h1 style={{ fontFamily: "Sagrantino", color: color }}>Create Category</h1>
                </div>
                <div className="container">
                    <form>

                        <input value={categoryName} onChange={(e) => {setCategoryName(e.target.value)}} style={{ color: color, backgroundColor: '#000000', borderColor: color }} type="text" placeholder='Category Name' className="form-control my-2" />
                        
                        <div className="d-flex justify-content-end my-3">
                            <button disabled={categoryName?false:true} onClick={(e)=>makeCategory(e)}  style={{ borderColor: color, color: color }} className="btn my-2">Create Category</button>
                        </div>
                    </form>
                </div>

            </div>








     
        </div>
    )
}