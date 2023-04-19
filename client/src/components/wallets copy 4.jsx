import React from 'react'
import WalletCarousal from './carousal copy'
import WalletList from './products copy 2'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import NoteContext from '../context/notes/noteContext'
export default function Categories() {
    const location = useLocation()
    const {id} = useParams()
    const context = useContext(NoteContext)
    const {deleteCategory,mainLoader,getCategoryData,categoryData,setCatyEditor,setCategorial,editComponent,setComponent,setText,adminView} = context
    const {mainHeading,firstHeading,firstSmallPara,firstSmallParaTwo,firstSmallParaThree,secondHeading,secondSmallPara,secondSmallParaTwo,secondSmallParaThree} = categoryData
    
    useEffect(() => {
        // window.scroll(0,0)
        getCategoryData(id)
    }, [location.pathname])

    const catyEditDeclare = (e,compy)=>{
        if(adminView){
            setCatyEditor(true)
            setCategorial(id)
            setText(e.target.innerText);
            editComponent();
            setComponent(compy)
        
        }
        
        }
    
    
    const color = "#F4B92D"
    const removeSpace = mainHeading&& mainHeading.replace(" ","")
    const slug = mainHeading && removeSpace.toLowerCase()
    // console.log(slug)
    return (
        <>
    {   <div style={{ marginTop: `${window.innerWidth > 992 ? '100px' : '57px'}`,height:mainLoader&&'0px' }}>
            <WalletCarousal />
            <div id='top'>
            <div className="mt-3">
                <WalletList slug={slug} />
            </div>
            </div>
            <div className="pb-5">
                <div className="container ">
                    <div className="pb-5">
                        <p  data-aos="fade-up"  data-aos-duration="1000" onClick={(e)=>{catyEditDeclare(e,'firstHeading')}} style={{ fontFamily: "Sagrantino", fontSize: "38.5px", color: color, fontWeight: "bolder" }} className='text-center mb-4 py-2'>{firstHeading}</p>
                        <p  data-aos="fade-right"  data-aos-duration="1000" onClick={(e)=>{catyEditDeclare(e,'firstSmallPara')}} style={{ fontSize: "16.5px", color: color }}>{firstSmallPara}</p>
                        <p  data-aos="fade-left"  data-aos-duration="1000" onClick={(e)=>{catyEditDeclare(e,'firstSmallParaTwo')}} style={{ fontSize: "16.5px", color: color }}>{firstSmallParaTwo}</p>
                        <p  data-aos="fade-right"  data-aos-duration="1000" onClick={(e)=>{catyEditDeclare(e,'firstSmallParaThree')}} style={{ fontSize: "16.5px", color: color }}>{firstSmallParaThree}</p>

                        <p  data-aos="fade-up"  data-aos-duration="1000" onClick={(e)=>{catyEditDeclare(e,'secondHeading')}} style={{ fontFamily: "Sagrantino", fontSize: "38.5px", color: color }} className='text-center my-2 py-2'>{secondHeading}</p>
                        <p  data-aos="fade-right"  data-aos-duration="1000" onClick={(e)=>{catyEditDeclare(e,'secondSmallPara')}} style={{ fontSize: "16.5px", color: color }}>{secondSmallPara}</p>
                        <p  data-aos="fade-left"  data-aos-duration="1000" onClick={(e)=>{catyEditDeclare(e,'secondSmallParaTwo')}} style={{ fontSize: "16.5px", color: color }}>{secondSmallParaTwo}</p>
                        <p  data-aos="fade-right"  data-aos-duration="1000" onClick={(e)=>{catyEditDeclare(e,'secondSmallParaThree')}} style={{ fontSize: "16.5px", color: color }}>{secondSmallParaThree}</p>
                    </div>
                </div>
            </div>
           {adminView&& <div className="d-flex justify-content-center my-2">
                <button onClick={()=>deleteCategory(id)} className='btn' style={{color:color,borderColor:color,backgroundColor:"#000000"}}>Delete Category</button>
            </div>}
        </div>}
        </>
    )
}