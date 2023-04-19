import React from 'react'
import NoteContext from '../context/notes/noteContext'
import { useContext } from 'react'


export default function NotPagination({ reversed }) {
    const context = useContext(NoteContext)
    const { postsPerPage,setCurrentPage } = context
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(reversed.length / 8); i++) {
        pageNumbers.push(i);
    }

    console.log(pageNumbers)

    const handleClickScroll = () => {
        const element = document.getElementById('walletcaro');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section

         
          element.scrollIntoView({ behavior: 'instant',scrollTop:300,inline:"end",block:"start" });

        }
      };


    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="mypagination justify-content-center"  >
                
                    <li  style={{borderColor:"#F4B92D",backgrondColor:"#000000",color:"#F4B92D"}} className="page-item disabled">
                        <a className="page-link">Previous</a>
                    </li>
                {pageNumbers.map((e)=>{

                  return  <li onClick={(e)=>{setCurrentPage(e.target.innerText);handleClickScroll()}} style={{borderColor:"#F4B92D",backgrondColor:"#000000",color:"#F4B92D"}} className="page-item"><a className="page-link" >{e}</a></li>
                })}
                    <li  style={{borderColor:"#F4B92D",backgrondColor:"#000000",color:"#F4B92D"}} className="page-item">
                        <a className="page-link">Next</a>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}