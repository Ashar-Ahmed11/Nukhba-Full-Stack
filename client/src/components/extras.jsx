import React from 'react'
import NoteContext from '../context/notes/noteContext'
import { useContext } from 'react'
export default function Extras() {
    const context = useContext(NoteContext)
    const {testimonialSliderRef,homeData,adminView,editComponent,setText,setComponent,setImageEditor} = context
    const color = "#F4B92D"
    return (
        <div>
            <div data-aos="fade-up"  data-aos-duration="1000" className='container p-5' style={{ color: color }}>
                <p onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('secondSmallPara')}}}>{homeData.secondSmallPara}</p>
                <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('secondSmallHead')}}} className='h1 mb-4' style={{ fontFamily: 'Sagrantino' }}>{homeData.secondSmallHead}</p>
                <div>
                    <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('secondSmallParaTwo')}}}>{homeData.secondSmallParaTwo}</p>
                </div>
                <p onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('secondSmallParaThree')}}}>{homeData.secondSmallParaThree}</p>
            </div>
            <div className="my-2" style={{ color: color }}>
                <div className="container p-5">
                    <div className="row">
                        <div  data-aos="fade-right"  data-aos-duration="1000" style={{height:'max-content'}} className="col-md-6 col-12">
                            {/* <div className="card withImg" style={{ borderRadius: '0px', backgroundColor: '#000000' }}> */}

                                <img onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('bodyImg');setImageEditor(true)}}} style={{ borderRadius: '0px', height: '90%',width:'100%' }} className='card-img' src={homeData.bodyImg} alt="" />

                            {/* </div> */}
                        </div>
                        <div   data-aos="fade-left"  data-aos-duration="1000" className="col-md-6 col-12">
                            <div className="card pt-5 px-3" style={{ borderRadius: '0px', backgroundColor: '#000000' }}>

                                <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('thirdSmallPara')}}}>{homeData.thirdSmallPara}</p>
                                <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('thirdSmallHead')}}} className='h1 mb-4' style={{ fontFamily: 'Sagrantino' }}>{homeData.thirdSmallHead}</p>
                                <p onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('thirdSmallParaTwo')}}}>{homeData.thirdSmallParaTwo}</p>
                                <div className="d-flex justify-content-start">
                                    <button className="btn" style={{ borderRadius: "100px", backgroundColor: "#000000", color: color, width: 'max-content', borderColor: color }}>VIEW CRAFT</button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
            <div className='container pb-3'>
            <p className="h1 text-center my-5" style={{ fontFamily: 'Sagrantino', color: color }}>Our Testimonials</p>
                <div ref={testimonialSliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide">
                        <div style={{backgroundColor:'#000000',color:color}} className="card">
                            <div className="card-body ">
                                <p className='text-center'><i style={{fontSize:"25px"}} class="fa fa-quote-left px-2" aria-hidden="true"></i>I love this leather brand! Their products are high-quality and stylish. They stand up to wear and tear and keep looking great. I've been using them for months and am always impressed with the results!<i style={{fontSize:"25px"}} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                     <p style={{fontWeight:"bolder",fontSize:"25px"}} className="text-center">Shahid Khan</p>

                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide">
                        <div style={{backgroundColor:'#000000',color:color}} className="card">
                            <div className="card-body ">
                                <p className='text-center'><i style={{fontSize:"25px"}} class="fa fa-quote-left px-2" aria-hidden="true"></i>
                                This leather brand is top-notch! The craftsmanship is amazing and the quality is unbeatable. I'm always confident that I'm getting the best product when I buy from them.<i style={{fontSize:"25px"}} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                                     <p style={{fontWeight:"bolder",fontSize:"25px"}} className="text-center">Abdul Samad</p>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide">
                        <div style={{backgroundColor:'#000000',color:color}} className="card">
                            <div className="card-body ">
                                <p className='text-center'><i style={{fontSize:"25px"}} class="fa fa-quote-left px-2" aria-hidden="true"></i>This leather brand has been a favorite of mine for a long time. Their products are durable, fashionable, and always up-to-date with the latest trends. I'd recommend them to anyone looking for great leather pieces.<i style={{fontSize:"25px"}} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                                     <p style={{fontWeight:"bolder",fontSize:"25px"}} className="text-center">Mirza Sameer</p>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide">
                        <div style={{backgroundColor:'#000000',color:color}} className="card">
                            <div className="card-body ">
                                <p className='text-center'><i style={{fontSize:"25px"}} class="fa fa-quote-left px-2" aria-hidden="true"></i>
                                This leather brand is top-notch! The craftsmanship is amazing and the quality is unbeatable. I'm always confident that I'm getting the best product when I buy from them.<i style={{fontSize:"25px"}} class="fa fa-quote-right px-2" aria-hidden="true"></i></p>
                                                     <p style={{fontWeight:"bolder",fontSize:"25px"}} className="text-center">Abdul Samad</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            <div   data-aos="fade-up"  data-aos-duration="1000" style={{ color: color }} className="container pb-5 px-5 mb-4">
                <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('fourSmallHead')}}} style={{ fontFamily: 'Sagrantino' }} className="h1 my-4">{homeData.fourSmallHead}</p>
                <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('fourSmallPara')}}}>{homeData.fourSmallPara}</p>
                <p  onClick={(e)=>{if(adminView){setText(e.target.innerText);editComponent();setComponent('fourSmallParaTwo')}}}>{homeData.fourSmallParaTwo}</p>
            </div>
        </div>
    )
}