import React from 'react'
import NoteContext from '../context/notes/noteContext'
import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Image,Transformation } from 'cloudinary-react'
export default function WalletCarousal() {
    const {id} = useParams()
    const location = useLocation()
    const context = useContext(NoteContext)
    const { setCatyImageEditor, setMainLoader, getCategoryData, categoryData, setCatyEditor, setCategorial, editComponent, setComponent, setText, adminView, setCarousalEditor, setImageEditor } = context
    const { mainCarousalImgDesktop, mainCarousalImgPhone, mainHeading } = categoryData
    const [imgLoad, setImgLoad] = useState(false)

    if (imgLoad) {
        setMainLoader(false)
    }
    else {
        setMainLoader(true)
    }



    useEffect(() => {
      setImgLoad(false)
    }, [location.pathname])
    

    const catyEditDeclare = () => {
        if (adminView) {
            setCatyImageEditor(true)
            setCatyEditor(true)
            setCategorial(id)

            editComponent()
            setCarousalEditor(true);
            setImageEditor(true);
            setComponent('mainCarousalImgDesktop')

        }

    }

    return (
        <div>
            <div style={{ borderBottom: `1px solid #F4B92D` }} id="carouselExampleCaptions" class="carousel slide">

                <div onClick={() => { catyEditDeclare() }} class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='shade'></div>
                        {/* <img  key={mainCarousalImgDesktop} onLoad={() => { setImgLoad(true)}} src={window.innerWidth > 750 ? mainCarousalImgDesktop : mainCarousalImgPhone} class="d-block w-100" alt="..." /> */}
                       
                        <div   key={mainCarousalImgDesktop} onLoad={() => { setImgLoad(true)}}  class="d-block w-100" >
                        <Image cloudName="dextrzp2q"  className="card-img-top" key={window.innerWidth > 750 ? mainCarousalImgDesktop : mainCarousalImgPhone} publicId={window.innerWidth > 750 ? mainCarousalImgDesktop : mainCarousalImgPhone} type="fetch">

	<Transformation fetchFormat="avif" />
	<Transformation quality="60" />
</Image>
</div>
                       
                        <div className="mycarousel-caption">

                            <p  data-aos="fade-up"  data-aos-duration="1000"  style={{ fontFamily: 'Sagrantino', fontSize: "52.8px" }}>{mainHeading}</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}