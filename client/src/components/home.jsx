import React, { useContext } from 'react'
import Carousal from './carousal'
import Products from './products'
import Extras from './extras'
import FeaturedOnes from './products copy'
import FinalCover from './finalcover'
import { useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'
export default function Home() {
    const context = useContext(NoteContext)
    const {getHomeData,mainLoader} = context

    useEffect(() => {
      getHomeData()
    }, [])

    
    useEffect(() => {
      window.scrollTo(0,0)
    }, [])
    
    const color = "#F4B92D"
    return (
        <div style={{ marginTop: `${window.innerWidth>992?'100px':'57px'}`,height:mainLoader&&'0px'}}>
            <Carousal />
            <Products />

            <Extras />
            <FeaturedOnes/>
            <FinalCover/>

        </div>
    )
}