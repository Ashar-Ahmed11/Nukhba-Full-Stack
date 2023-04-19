import React from 'react'
import { useRef } from 'react'
import logo from './nukhbaLogo.png'
import Cart from './cart'
import { useContext,useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import { Link,useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Navbar() {
    const context = useContext(NoteContext)
    const location = useLocation()
    const { categoriesRef,categories,setCategories,setMySpace,pageRef,ref, openCart, fetchCart, mainLoader,adminView,setAdminView,modalIsOpen,setMainLoader} = context

    const getCategories = async()=>{
        setMainLoader(true)
        const url = "https://faithful-bass-yoke.cyclic.app/api/getdata/getcategories"
        const response = await fetch(url, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    
    
          // body data type must match "Content-Type" header
        });
    
        const data = await response.json()
        setCategories(data)
        setMainLoader(false)
    }



    useEffect(() => {
      getCategories()
    }, [])


    // let newCategories = categories.filter((e)=>{return e._id=="6433332d10b9054a792b64ef"})   
    useEffect(() => {
 
    }, [])
    let anotherCategory =[]
    anotherCategory=categories 
    const anotherArray = anotherCategory.filter((e)=>{return e._id=="6433332d10b9054a792b64ef"})
    const array = categories.filter((e)=>{return e._id!=="6433332d10b9054a792b64ef"})
    let finalArray = [] 
    finalArray = [...anotherArray,...array]
    
    console.log(finalArray)

    
    // console.log(categories)




    const history = useNavigate()
    const refer= useRef(null)
   
    const color = "#F4B92D"
    const [blur, setBlur] = useState(false)
    const date = 1678538895;
    if(mainLoader){
        document.body.style.overflow = "hidden"
    }
    else{
        document.body.style.overflowY = "visible"
        document.body.style.overflowX = "hidden"
      
    }
    return (
        <div style={{zIndex:modalIsOpen?'0':'999999999',backgroundColor:'rgba(0,0,0,0)'}} 
        className={`${!mainLoader && 'fixed-top'} modal-open ${!blur&&'blur'}`}>
              { adminView && <div  style={{backgroundColor:'#f88234'}} className='d-flex justify-content-center'>
                 <div className="d-flex my-2">
                 <p className='pt-2 mx-2' style={{color:'white'}} >Admin View Activated</p>
                 <button onClick={() => { localStorage.removeItem('auth-token'); history('/admin');setAdminView(false) }} style={{color:'white',border:`1px solid white`}} className="btn">Logout</button>
                 </div>
                 </div>}
             
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ borderBottom: `1px solid ${color}` }}>
              
                {window.innerWidth < 992 ? <div className="container-fluid">
                    <div>

                        <button ref={categoriesRef} onClick={()=>setBlur(true)}  className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <i style={{ color: color }} className="fa fa-bars" aria-hidden={true}></i>
                        </button>
                    </div>
                    <div>
                        <Link onClick={()=>setMySpace(10)} className="navbar-brand" to='/' style={{ color: color }}>
                            <img src={logo} alt="Logo" width="30" height="24" className="mx-2 d-inline-block align-text-top" />
                            NUKHBA
                        </Link>
                    </div>
                    <div>

                        <ul className="mynavbar-nav me-auto mb-2 mb-lg-0">




                            <li className="nav-item">
                                <a style={{ cursor: 'pointer' }} onClick={() => { openCart(); fetchCart() }} className="nav-link">
                                    <i style={{ fontSize: "25px", color: color }} className="fa fa-shopping-cart" aria-hidden={true}></i>

                                </a>

                            </li>


                        </ul>



                    </div>
                    <div style={{height:'100vh',backgroundColor:'rgba(0,0,0,0)',backdropFilter:'blur(15px)'}} className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header" style={{ }}>
                            <div className="d-flex justify-content-end">
                                <div>
                                    <button onClick={()=>setBlur(false)} ref={refer} style={{ color: color }} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa fa-times-circle" aria-hidden={true}></i>
</button>
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas-body" style={{  }}>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <form className="d-flex" role="search">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        
                                        {window.innerWidth < 992 && <>
                                        {finalArray.map((e)=>{
                                            return <li className="nav-item">
                                            <Link style={{ color: color,fontSize:"30px" }} className="nav-link active" aria-current="page" to={`categories/${e._id}`} onClick={()=>{refer.current.click()}}>{e.mainHeading}</Link>
                                        </li>
                                        })}
                                        
                                         
                                        </>}

                                       

                                    </ul>
                                </form>
                            </ul>

                        </div>
                        <div className="offcanvas-footer" style={{ borderTop: `1px solid ${color}` }}>
                            <ul className="mynavbar-nav me-auto mb-2 mb-lg-0 py-3 px-2">
                                <li className="nav-item mx-2 ">

                                    <a target="_blank" href="https://www.instagram.com/nukhba.shop/" style={{ cursor: 'pointer' }} className="nav-link">
                                        <i style={{ fontSize: "25px", color: color }} className="fa fa-instagram" aria-hidden={true}></i>

                                    </a>

                                </li>
                                <li className="nav-item mx-2">
                                    <a target="_blank" href="https://www.facebook.com/nukhbapk" style={{ cursor: 'pointer' }} className="nav-link">
                                        <i style={{ fontSize: "25px", color: color }} className="fa fa-facebook-official" aria-hidden={true}></i>

                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div> :
                    <div className="container-fluid" >
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                                <li className="nav-item">
                                    <a target="_blank" href="https://www.instagram.com/nukhba.shop/"  style={{ cursor: 'pointer' }} className="nav-link">
                                        <i style={{ fontSize: "25px", color: color }} className="fa fa-instagram" aria-hidden={true}></i>

                                    </a>

                                </li>
                                <li className="nav-item">
                                    <a target="_blank" href="https://www.facebook.com/nukhbapk" style={{ cursor: 'pointer' }} className="nav-link">
                                        <i style={{ fontSize: "25px", color: color }} className="fa fa-facebook-official" aria-hidden={true}></i>

                                    </a>

                                </li>
                            </ul>
                        </div>
                        <div>
                            <Link className="navbar-brand" to='/' style={{ color: color }}>
                                <img src={logo} alt="Logo" width="30" height="24" className="mx-2 d-inline-block align-text-top" />
                                NUKHBA
                            </Link>
                        </div>
                        <div>

                            <span className="navbar-text">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                                    <li className="nav-item">
                                        <a style={{ cursor: 'pointer' }} onClick={() => { openCart(); fetchCart() }} className="nav-link">
                                            <i style={{ fontSize: "25px", color: color }} className="fa fa-shopping-cart" aria-hidden={true}></i>

                                        </a>

                                    </li>
                                </ul>
                            </span>
                        </div>

                    </div>}
            </nav>

            {window.innerWidth > 992 && <div className='d-flex justify-content-between' style={{ borderBottom: `1px solid ${color}` }}>
                <div className="container-fluid">
                    <div>

                    </div>
                    <div>
                        <ul className="mynavbar-nav me-auto mb-2 mb-lg-0 justify-content-center">

                            {finalArray.map((e)=>{
                                return <li className="nav-item mx-5">
                                <Link style={{ color: color }} className="nav-link active" aria-current="page"  to={`categories/${e._id}`}>{e.mainHeading}</Link>
                            </li>
                            })}
                            
                            

                        </ul>
                    </div>
                    <div>

                    </div>
                </div>

            </div>}

            <button hidden={true} ref={ref} className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                Toggle static offcanvas
            </button>
            <Cart />
        </div>
    )
}