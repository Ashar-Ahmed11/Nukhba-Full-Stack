import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import { useState } from 'react'
import Spinner from './spinner'
export default function Admin() {
    const context = useContext(NoteContext)
    // const { cloudinary } = context

    // const [file, setFile] = useState()

    // const sendFile = (e) => {
    //     e.preventDefault()
    //     cloudinary(file)
    // }
    const { loginLoader, loginAdmin } = context
    const [password, setPassword] = useState("")
    const declareLogin=(e)=>{
        e.preventDefault()
        loginAdmin(password)
     
    }
    const color = "#F4B92D"
    return (
        // <div  style={{marginTop:"150px"}}>
        //     <h1 className="text-center">This is admin panel</h1>
        //     <div className="d-flex justify-content-center">
        //         <form onSubmit={(e)=>sendFile(e)}>
        //         <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} />
        //         <button type="submit">Submit</button>
        //         </form>
        //     </div>
        // </div>
        <div className='my-5'>
            <div className="pt-5">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column pt-5">
                        <div className="card mx-3" style={{ width: '400px', backgroundColor: "#000000", border: `1px solid ${color}` }}>
                            <h1 className="text-center my-3" style={{ fontFamily: 'Sagrantino', color: color }}>Admin Panel</h1>
                            <form onSubmit={(e)=>declareLogin(e)}>
                                <div class="mb-3 mx-3">

                                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} style={{ color: 'white', backgroundColor: '#000000', borderColor: color }} type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                                </div>
                                <div className="d-flex justify-content-center mt-2 mb-4">
                                    <button type='submit' className="btn" style={{ color: color, borderColor: color, backgroundColor: '#000000' }}>Login</button>
                                </div>
                            </form>
                        </div>
                        {loginLoader && <div className='d-flex justify-content-center'>
                            <Spinner />
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}