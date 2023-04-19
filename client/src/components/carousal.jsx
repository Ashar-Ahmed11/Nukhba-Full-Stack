import React from 'react'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Image,Transformation } from 'cloudinary-react'
export default function Carousal() {
  const context = useContext(NoteContext)
  const { categoriesRef,setImgIsLoaded, setMainLoader, homeData, setCarousalEditor, adminView, editComponent, setText, setImageEditor, setComponent } = context
  const { mainCarousalImgDesktop, mainCarousalImgPhone } = homeData
  const [imgLoad, setImgLoad] = useState(false)

  if(imgLoad){
      setMainLoader(false)

  }
  else{
      setMainLoader(true)
  }
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">

        <div onClick={(e) => { if (adminView) { setText(e.target.innerText); editComponent(); setCarousalEditor(true); setImageEditor(true); setComponent('mainCarousalImgDesktop') } }} class="carousel-inner">
          <div class="carousel-item active">
            <div className='shade'></div>
         
            {/* <img onLoad={()=>{setImgLoad(true)}} src={window.innerWidth > 750 ? mainCarousalImgDesktop : mainCarousalImgPhone} class="d-block w-100" alt="..." /> */}
    


            <div   key={window.innerWidth > 750 ? mainCarousalImgDesktop : mainCarousalImgPhone}    onLoad={()=>{setImgLoad(true)}} class="d-block w-100" >
                        <Image cloudName="dextrzp2q"  className="card-img-top" key={window.innerWidth > 750 ? mainCarousalImgDesktop : mainCarousalImgPhone} publicId={window.innerWidth > 750 ? mainCarousalImgDesktop : mainCarousalImgPhone} type="fetch">

	<Transformation fetchFormat="avif" />
	<Transformation quality="60" />
</Image>
</div>

            <div data-aos="fade-up" data-aos-duration="2000" className="mycarousel-caption">

              <p style={{ fontFamily: 'Sagrantino', fontSize: "35.2px" }}>The New Obsession</p>
              <p style={{ fontSize: "17.6px", marginBottom: '0px' }}>Shop with us and make the most of your budget!</p>

              {window.innerWidth>992?<Link to="/categories/6433332d10b9054a792b64ef">      <button className="btn" style={{ padding: '9px 16px', borderRadius: "100px", color: 'white', width: 'max-content', borderColor: 'white', fontSize: '13.2px' }}> <p style={{ marginBottom: '0px' }}> VIEW CRAFTS</p></button></Link>
              :    <button onClick={()=>categoriesRef.current.click()} className="btn" style={{ padding: '9px 16px', borderRadius: "100px", color: 'white', width: 'max-content', borderColor: 'white', fontSize: '13.2px' }}> <p style={{ marginBottom: '0px' }}> VIEW CATEGORIES</p></button>}
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}