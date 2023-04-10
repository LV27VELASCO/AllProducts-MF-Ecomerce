import React, { useState } from 'react'
import "../styles/products.css"
import "../styles/style.css"
const ViewProduct = ({url,title,verImagen}) => {

  return (
    <div className="fixed w-full h-screen bg-transparent flex justify-center top-0 z-10">
        <div className="relative cons bg-gray-100 top-60 sm:top-36 rounded-lg p-2" >
            <div className="rounded-full absolute -right-3 -top-3 flex justify-center items-center cursor-pointer" onClick={()=>verImagen()}>
                <i className="fa-solid fa-circle-xmark text-2xl colorx"></i>
            </div>
            <img className="img-expand" loading='lazy' src={url} alt={title}/>
        </div> 
    </div>
  )
}

export default ViewProduct