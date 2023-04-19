import React from 'react'
import logo from './nukhbaLogo.png'
import { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import { useEffect,useState } from 'react';
export default function BigLoader() {
    const context = useContext(NoteContext)
    const { mainLoader,anotherLoader,imgIsLoaded } = context
    const color = "#F4B92D"
    useEffect(() => {

        window.scrollTo(0, 0)
      }, [])
      

   const [myClass, setMyClass] = useState("")
    return (
        <div>
{     mainLoader &&     <div  className='mainLoader'>
                <div className="d-flex justify-content-center p-5 m-5">
                    <div className="p-5 m-5">
                        <div className="d-flex flex-column">
                            <div className={myClass}></div>
                            <img onLoad={()=>setMyClass("glow")} style={{ width: '200px',zIndex:"9999999" }} src={logo} alt="" />
                            {/* <div className="d-flex justify-content-center mt-5">
                                <div className="spinner-border" style={{ width: "70px", height: "70px", color: color }} role="status">
                                    <span className="visually-hidden">Loading...</span>

                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>}
        </div>

    )
}