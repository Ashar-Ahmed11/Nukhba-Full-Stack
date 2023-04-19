import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Navbar from './components/navbar';
import Categories from './components/wallets copy 4';
import CreateProduct from './components/admin/createProduct';
import Home from './components/home';
import NoteState from './context/notes/noteState';
import ProductView from './components/productView';
import '../src/App.css'
import Footer from './components/footer';
import BigLoader from './components/bigloader';
import { useEffect } from 'react';
import Checkout from './components/checkout';
import ThankYou from './components/thankyou';
import Admin from './components/admin';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './components/scrolltotop';
import EditLoader from './components/editLoader'

import AdminEditor from './components/adminEditor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CreateCategory from './components/admin/createProduct copy';

export default function App() {

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);
    document.body.style = 'background: #000000;'
    // document.body.style = loader?'overflow:hidden;':'overflow:show;'
    const location = useLocation()

    useEffect(() => {
        AOS.init();
      }, [])

     
   

    return (
        <div>


            <NoteState>
            <ScrollToTop/>
                <EditLoader/>
                {/* https://web.whatsapp.com/send?phone=923083116347&text=Welcome%20to%20the%20store */}
                <BigLoader />
                <AdminEditor/>
                <div hidden={location.pathname == '/checkout' && 'true' || location.pathname == '/thankyou' && 'true' || location.pathname == '/admin' && 'true'}>
                    <Navbar />
                    <div className='whatsapp'>
                        <a target="_blank" aria-label="Chat on WhatsApp" href="https://wa.me/923083116347?text=Welcome%20to%20Nukhba%2C%20how%20can%20we%20help%20you%3F"> <i style={{ color: '#0dc143' }} className="fa fa-whatsapp" aria-hidden="true"></i> </a>
                    </div>
                </div>
                <div>



                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/wallets" element={<Wallets />} />
                        <Route path="/belts" element={<Belts />} />
                        <Route path="/handbags" element={<Handbags />} />
                        <Route path="/accessories" element={<Accessories />} />
                        <Route path="/giftsets" element={<GiftSets />} />
                        <Route path="/ladiesclutches" element={<LadiesClutches />} />
                        <Route path="/officebags" element={<OfficeBags />} /> */}
                        <Route path="/categories/:id" element={<Categories />} />

                        <Route path="/product/:productid" element={<ProductView />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/thankyou" element={<ThankYou />} />
                        <Route path="/createproduct" element={<CreateProduct />} />
                        <Route path="/createcategory" element={<CreateCategory />} />

                        <Route path="/admin" element={<Admin />} />
               
                    </Routes>









                </div>
                <div hidden={location.pathname == '/admin' && 'true'}>
                    <Footer />
                </div>
            </NoteState >


        </div >
    )
}