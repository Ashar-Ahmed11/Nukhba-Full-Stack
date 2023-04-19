import React from 'react'
import imageToBase64 from 'image-to-base64'
import NoteContext from './noteContext'
import { commerce } from '../../lib/commerce'
import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import useLocalStorage from '../../components/useLocalStorage'
import { useKeenSlider } from "keen-slider/react"
import { useEffect } from 'react'
import "keen-slider/keen-slider.min.css"
const NoteState = (props) => {
  const [loader, setLoader] = useState(false)
  const [mainLoader, setMainLoader] = useState(true)
  const [productLoader, setProductLoader] = useState(false)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({ line_items: [], subtotal: { formatted_with_code: "Rs0.00", raw: "" } })
  const [mySpace, setMySpace] = useState(15)
 
  const location = useLocation()

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)
  const lastItemIndex = currentPage * postPerPage;
  const firstItemIndex = lastItemIndex - postPerPage;

  const fetchProduct = async () => {
    setMainLoader(!location.pathname=='/'?true:false)
    const { data } = await commerce.products.list({
      limit: 200,
      sortBy:'created',
      sortDirection:'asc',
 
    })
    setProducts(data)
    setMainLoader(false)
    setMySpace(0)
  }
  const fetchCart = async () => {
    setLoader(true)
    const response = await commerce.cart.retrieve()
    setCart(response)
    // console.log(response)
    setLoader(false)
  }

  // const response = await commerce.cart.remove(itemId)
  // const response = await commerce.cart.update(productId,{quantity})
  // const response = await commerce.cart.empty()


  const addProduct = async (productId, quantity) => {
    setProductLoader(true)
    const response = await commerce.cart.add(productId, quantity)
    // console.log(response)
    setCart(response)
    setProductLoader(false)
    openCart()

  }
  const updateProduct = async (productId, quantity) => {
    setLoader(true)
    const response = await commerce.cart.update(productId, { quantity })
    setCart(response)
    setLoader(false)
  }

  const removeProduct = async (itemId) => {
    setLoader(true)
    const response = await commerce.cart.remove(itemId)
    setCart(response)
    setLoader(false)
  }

  const clearCart = async () => {

    const response = await commerce.cart.empty()
    setCart(response)

  }


  const ref = useRef(null)
  const openCart = () => {
    ref.current.click()
  }
  // FOR SPECIFIC PRODUCT

  let history = useNavigate()


  const [productView, setProductView] = useState({name:"", price:"", image:"", id:"", assets:[], description:"", thank_you_url:""})
  const [mainProductId, setMainProductId] = useLocalStorage()
  const [sliderSize, setSliderSize] = useState(5)
  const getProduct = async (productId) => {
    
    setMainLoader(true)
    setMainProductId(null)
    const data = await commerce.products.retrieve(productId)
    // console.log(data)
    setProductView(data)
    history(`/product/${data.id}`)
    setMainProductId(data.id)
    setMainLoader(false)
    setSliderSize(10)
 
  }

  const [homeProducts, setHomeProducts] = useState([])
  const [anotherLoader, setAnotherLoader] = useState(false)
  const getHomeProducts = async () => {
    
    const data = await commerce.products.retrieve('prod_r2LM5QQY8r5ZV1')
    // console.log(data)
    setHomeProducts(data.related_products)

    setMySpace(0) 

  }
  console.log(homeProducts)



  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    loop: true,
    slides: {
      origin: "center",
      perView: 1.4,
      spacing: mySpace,
    },
  })
  const [sliderRefTwo] = useKeenSlider({
    mode: "free-snap",
    loop: true,
    slides: {
      origin: "center",
      perView: 1.4,
      spacing: mySpace,
    },
  })




  const [checkoutLoader, setCheckoutLoader] = useState(false)
  // Example POST method implementation:

  // Default options are marked with *
  const sendWhatsappMessage = async (name, email, phone, products, address, city, total, smallTotal) => {
    const url = "https://faithful-bass-yoke.cyclic.app/api/sendmessage/"
    setCheckoutLoader(true)
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({ name: name, email: email, phone: phone, products: products, address: address, total: total, city: city }) // body data type must match "Content-Type" header
    });
    sendEmail(name, email, products, total, smallTotal)
    clearCart()
    setCheckoutLoader(false)
    history('/thankyou')

    return response.json(); // parses JSON response into native JavaScript objects
  }

  // https://faithful-bass-yoke.cyclic.app/api/sendemail/
  const sendEmail = async (name, email, products, total, smallTotal) => {
    const url = "https://faithful-bass-yoke.cyclic.app/api/sendemail/"
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },


      body: JSON.stringify({ name: name, email: email, products: products.toString(), total: smallTotal.toString(), subtotal: total.toString() }) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }




  const cloudinary = async (component, file) => {
    setEditorLoader(true)
    const url = "https://api.cloudinary.com/v1_1/dextrzp2q/image/upload"

    // https://faithful-bass-yoke.cyclic.app/api/sendImg/

    const formData = new FormData()

    formData.append('file', file)
    formData.append('upload_preset', 'dga8po59')

    const response = await fetch(url, {
      method: 'post', // *GET, POST, PUT, DELETE, etc.



      body: formData // body data type must match "Content-Type" header
    });



    const myres = await response.json();
    // console.log(myres.secure_url)
    if (catyEditor) {
      categoryEditor(component, myres.secure_url, categorial)
    }
    else {
      editor(component, myres.secure_url)
    }
    // parses JSON response into native JavaScript objects


  }


  const [loginLoader, setLoginLoader] = useState(false)

  // https://faithful-bass-yoke.cyclic.app/api/auth/login

  const [adminView, setAdminView] = useLocalStorage('adminView', false)
  const loginAdmin = async (password) => {

    setLoginLoader(true)
    const url = "https://faithful-bass-yoke.cyclic.app/api/auth/login"
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },


      body: JSON.stringify({ username: 'Suhaib Ahmed', password: password }) // body data type must match "Content-Type" header
    });
    const token = await response.json()

    setLoginLoader(false)

    setAdminView(true)
    localStorage.setItem('auth-token', token.authToken)
    history('/')

  }

  const [homeData, setHomeData] = useState({})
  const getHomeData = async () => {

    setMainLoader(true)
    const url = "https://faithful-bass-yoke.cyclic.app/api/getdata/gethome"
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
    setHomeData(data)
    setMainLoader(false)
    // console.log(data)
  }



  const editor = async (component, value) => {
    setLoginLoader(true)
    setEditorLoader(true)
    const url = "https://faithful-bass-yoke.cyclic.app/api/getdata/edithome"

    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },




      body: JSON.stringify({ [`${component}`]: value }) // body data type must match "Content-Type" header
    });
    const data = await response.json()
    setHomeData(data)
    setEditorLoader(false)
  }

  const myRef = useRef(null)
  const [text, setText] = useState("")
  const [Component, setComponent] = useState("")
  const editComponent = () => {
    myRef.current.click()
  }


  const [imageEditor, setImageEditor] = useState(false)
  const [footerImage, setFooterImage] = useState(false)
  const [carousalEditor, setCarousalEditor] = useState(false)
  const [editorLoader, setEditorLoader] = useState(false)



  const [categoryData, setCategoryData] = useState({})

  useEffect(() => {
    if(!categoryImage){
      setImgIsLoaded(false)
    }
    else{
      setImgIsLoaded(true)
    }
  }, [getCategoryData])
  
  const getCategoryData = async (category) => {

    setImgIsLoaded(false)
    setCategoryImage(null)
    setMainLoader(true)
    const url = `https://faithful-bass-yoke.cyclic.app/api/getdata/getcategory/${category}`
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
    setCategoryData(data)
    setCategoryImage(window.innerWidth > 750 ? categoryData.mainCarousalImgDesktop : categoryData.mainCarousalImgPhone)
    setMainLoader(false)
    setImgIsLoaded(true)
    // console.log(data)
  }

  // 63f889f5cdc19d1ff959060c data for wallets
  // 63f88ab086e4f159223e0d46 data for belts
  // 63f88b21b44e805ac73472f3 data for handbags
  // https://faithful-bass-yoke.cyclic.app/api/getdata/editcategory/63f88b21b44e805ac73472f3 for editing category




  const categoryEditor = async (component, value, category) => {
    setLoginLoader(true)
    setEditorLoader(true)
    const url = `https://faithful-bass-yoke.cyclic.app/api/getdata/editcategory/${category}`

    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('auth-token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },




      body: JSON.stringify({ [`${component}`]: value }) // body data type must match "Content-Type" header
    });
    const data = await response.json()
    setCatyEditor(false)
    setCatyImageEditor(false)
    setCategoryData(data)
    setEditorLoader(false)
  }
  const [catyEditor, setCatyEditor] = useState(false)
  const [categorial, setCategorial] = useState("")
  const [catyImageEditor, setCatyImageEditor] = useState(false)
  const pageRef = useRef(null)










  /**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} imageSrc - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */

const createImage = (url) =>
new Promise((resolve, reject) => {
  const image = new Image();
  image.addEventListener("load", () => resolve(image));
  image.addEventListener("error", (error) => reject(error));
  image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
  image.src = url;
});

function getRadianAngle(degreeValue) {
return (degreeValue * Math.PI) / 180;
}

 async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
const image = await createImage(imageSrc);
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

const maxSize = Math.max(image.width, image.height);
const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

// set each dimensions to double largest dimension to allow for a safe area for the
// image to rotate in without being clipped by canvas context
canvas.width = safeArea;
canvas.height = safeArea;

// translate canvas context to a central location on image to allow rotating around the center.
ctx.translate(safeArea / 2, safeArea / 2);
ctx.rotate(getRadianAngle(rotation));
ctx.translate(-safeArea / 2, -safeArea / 2);

// draw rotated image and store data.
ctx.drawImage(
  image,
  safeArea / 2 - image.width * 0.5,
  safeArea / 2 - image.height * 0.5
  );
  
  const data = ctx.getImageData(0, 0, safeArea, safeArea);
  
  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

// paste generated rotate image with correct offsets for x,y crop values.
ctx.putImageData(
  data,
  0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
  0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
  );

  // As Base64 string
  // return canvas.toDataURL("image/jpeg");
return canvas;
}

 const generateDownload = async (imageSrc, crop) => {
if (!crop || !imageSrc) {
  return;
}

const canvas = await getCroppedImg(imageSrc, crop);

imgCloudinary(canvas.toDataURL('img'))


// console.log(canvas)

};
const [asset, setAsset] = useLocalStorage(null)

const  createAsset=async(imgUrl) =>{
  const url = "https://api.chec.io/v1/assets"
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", 
   
    headers: {
      "Content-Type": "application/json",
      "Accept": "*",
      "X-Authorization":"sk_499300ddcd1ee967ae83993df0a32f3c2c4c42b267e31"

    },
    
    body: JSON.stringify({filename:"Wallet",url:imgUrl}), // body data type must match "Content-Type" header
  });
  const asset = await response.json();
  
  setAsset(asset.id)
  setUpload(true)
  modalRef.current.click()
  // console.log(asset)
  setEditorLoader(false)
  // parses JSON response into native JavaScript objects
}

// console.log(asset)



// const [base64, setBase64] = useState(second)
// https://res.cloudinary.com/demo/image/fetch/f_avif/https://res.cloudinary.com/dextrzp2q/image/upload/v1680877990/k7qda3mudytilky7nbhf.avif
// function convertImageToBase64(url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.onload = function() {
//     var reader = new FileReader();
//     reader.onloadend = function() {
//       callback(reader.result);
//     }
//     reader.readAsDataURL(xhr.response);
//   };
//   xhr.open('GET', url);
//   xhr.responseType = 'blob';
//   xhr.send();
// }



















const  createProduct=async(name,price) =>{
  setEditorLoader(true)
  const url = "https://api.chec.io/v1/products"
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", 
   
    headers: {
      "Content-Type": "application/json",
      "Accept": "*",
      "X-Authorization":"sk_499300ddcd1ee967ae83993df0a32f3c2c4c42b267e31"

    },
    
    body: JSON.stringify({product:{
      name:name,
      price:price,
      

    },
    seo:{
      title:'thezoomedpicture'
    },
    assets:{
      "*":{
        id:asset
      }
    }
  
  }
  ), // body data type must match "Content-Type" header
});
setEditorLoader(false)
  const product = await response.json();
 
  console.log(product)
  // parses JSON response into native JavaScript objects
}





const [upload, setUpload] = useState(false)
const [imgPreview, setImgPreview] = useLocalStorage()
const imgCloudinary = async (file) => {
  setEditorLoader(true)
  const url = "https://api.cloudinary.com/v1_1/dextrzp2q/image/upload"
  
  // https://faithful-bass-yoke.cyclic.app/api/sendImg/

const formData = new FormData()

formData.append('file', file)
formData.append('upload_preset', 'dga8po59')

const response = await fetch(url, {
  method: 'post', // *GET, POST, PUT, DELETE, etc.



  body: formData // body data type must match "Content-Type" header
});
const myurl = await response.json()
setImgPreview(myurl.secure_url)
console.log(myurl.secure_url)

createAsset(myurl.secure_url)

// https://api.chec.io/v1/products

}



const [categoryImage, setCategoryImage] = useState(null)
const [imgIsLoaded, setImgIsLoaded] = useState(false)
const [loaded, setLoaded] = useState(false)
const [modalIsOpen, setModalIsOpen] = useState(false)
const modalRef = useRef(null)

const animation = { duration: 5000, easing: (t) => t }


const [testimonialSliderRef] = useKeenSlider({
  loop: true,
  renderMode: "performance",
  drag: false,
  slides: {
    origin: "center",
    perView:window.innerWidth<768?1:2.5,
  
  },
  
  created(s) {
    s.moveToIdx(1, true, animation)
  },
  updated(s) {
    s.moveToIdx(s.track.details.abs + 1, true, animation)
  },
  animationEnded(s) {
    s.moveToIdx(s.track.details.abs + 1, true, animation)
  },
})

const refreshPage=()=> {
  setTimeout(()=>{
      window.location.reload(false);
  }, 500);
  
}

useEffect(() => {
  if(window.pageYOffset==0)
  {
    document.body.style.overflowY = "hidden"
  }
}, [location.pathname])

// console.clear()

const [imgLoad, setImgLoad] = useState(false)


const makeCategory=async(name)=>{
  const slug = name.toLowerCase().replace(" ","")
  const anotherUrl =   "https://api.chec.io/v1/categories"
  // Default options are marked with *
  const anotherResponse = await fetch(anotherUrl, {
    method: "POST", 
   
    headers: {
      "Content-Type": "application/json",
      "Accept": "*",
      "X-Authorization":"sk_499300ddcd1ee967ae83993df0a32f3c2c4c42b267e31"
   

    },
    
    body: JSON.stringify({name:slug,slug:slug}
  ), // body data type must match "Content-Type" header
});
const finalAnswer = await anotherResponse.json();
}



const  createCategory=async(name) =>{
  setEditorLoader(true)
  const url = "https://faithful-bass-yoke.cyclic.app/api/getdata/createcategory"
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", 
   
    headers: {
      "Content-Type": "application/json",
      "Accept": "*",
   

    },
    
    body: JSON.stringify({mainHeading:name}
  ), // body data type must match "Content-Type" header
});
const product = await response.json();
makeCategory(name)

setEditorLoader(false)
 
  setCategories(product)
  // parses JSON response into native JavaScript objects
}
const [categories, setCategories] = useState([])



const  deleteCategory=async(catyid) =>{
  setEditorLoader(true)
  const url = `https://faithful-bass-yoke.cyclic.app/api/getdata/deletecategory/${catyid}`
  // Default options are marked with *
  const response = await fetch(url, {
    method: "DELETE", 
   
    headers: {
      "Content-Type": "application/json",
      "Accept": "*",
     

    },
    
    body: JSON.stringify(
  ), // body data type must match "Content-Type" header
});
const product = await response.json();
setEditorLoader(false)

 
  setCategories(product)
  history('/')
  // parses JSON response into native JavaScript objects
}
const categoriesRef = useRef()
console.log(homeProducts)




 
  return (
    <NoteContext.Provider value={{categoriesRef,deleteCategory,createCategory,categories,setCategories,imgLoad,setImgLoad,refreshPage,mainProductId,setSliderSize,sliderSize,testimonialSliderRef,setImgPreview,modalRef,setModalIsOpen,modalIsOpen,imgPreview,loaded,setLoaded,imgIsLoaded,setImgIsLoaded,categoryImage,setAsset,asset,createProduct,upload,generateDownload,setMySpace,pageRef,anotherLoader,setAnotherLoader,getHomeProducts,homeProducts,currentPage,firstItemIndex,lastItemIndex,setCurrentPage, catyImageEditor, setCatyImageEditor, setCategorial, categorial, setCatyEditor, catyEditor, categoryEditor, getCategoryData, categoryData, setLoginLoader, editorLoader, footerImage, carousalEditor, setCarousalEditor, setFooterImage, setImageEditor, imageEditor, setComponent, Component, setText, text, editComponent, myRef, setAdminView, adminView, editor, homeData, getHomeData, loginLoader, loginAdmin, cloudinary, checkoutLoader, sendWhatsappMessage, sliderRefTwo, sliderRef, mainLoader, setMainLoader, productLoader, loader, productView, getProduct, removeProduct, updateProduct, ref, openCart, cart, addProduct, fetchProduct, products, fetchCart }}>
      {props.children}
    </NoteContext.Provider>
  )
}


export default NoteState