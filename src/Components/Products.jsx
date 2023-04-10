import React, { Suspense} from 'react'
import "../styles/products.css";
import {NavLink} from "react-router-dom";
import useProducts from '../Hooks/useProducts'
import QuickView from '../Helpers/ViewEye';
const ViewProduct = React.lazy(()=>import("./ViewProduct"))

const Products = ({product}) => {
  const {hoverActive,hoverInactive,active,navProduct,viewImg,setviewImg,verImagen}=useProducts();

  return (
    <>
    <div className="w-10/12 shadow-lg bg-white border border-gray-200 flex flex-col items-center justify-center py-4 px-2 rounded-lg  relative sm:w-4/12 md:w-3/12">
        <div onMouseOver={()=>hoverActive()} onMouseOut={()=>hoverInactive()} onClick={()=>verImagen()}  className="bg-gray-transparent absolute right-4 top-7 py-1 px-2 rounded-lg cursor-pointer hover:bg-marine transition ease-in duration-300">
            <i className="fa-sharp fa-regular fa-eye text-white"></i>
        </div>
        <span className={active==true?`${QuickView} block`:`${QuickView} hidden`}>Quick View</span>
        <img loading='lazy' src={product.images[0]?.url} alt={product?.title}  className="rounded-lg h-36"/>
        <div className="container w-11/12 flex justify-between p-2 py-3">
            <span className="text-yellow-700 text-xl">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <span className="text-sm font-bold px-3 py-1 rounded-md bg-green-400 text-white">IN STOCK</span>
        </div>
        <div className="w-11/12 flex flex-col gap-3 mt-2">
            <h2 className="text-gray-800 text-xl leading-snug tracking-tight font-semibold line-clamp-2 h-14">{product?.title}</h2>
            <p className="line-clamp-4 font-medium text-gray-700">{product?.description}</p>
        </div>
        <div className="w-11/12 px-1 py-3 flex items-center gap-1">
            <span className="w-3 h-3 bg-blue-700 rounded-full block"></span>
            <span className="w-3 h-3 bg-green-800 rounded-full block"></span>
            <span className="w-3 h-3 bg-red-700 rounded-full block"></span>
            <span className="w-3 h-3 bg-gray-900 rounded-full block"></span>
        </div>
        <div className="w-11/12 flex justify-start items-center gap-1 px-1">
            <span className="font-semibold text-base text-gray-800">USD</span>
            <span className="font-semibold text-base text-gray-800">${product?.price}</span>
        </div>
        <button onClick={()=>navProduct(product.id)} className="rounded-lg mt-3 bg-marine px-6 py-2 text-white font-bold">VIEW DETAILS</button>
    </div>
    {
        viewImg
         &&
        <Suspense fallback={"cargando..."}>
            <ViewProduct url={product.images[0]?.url} title={product?.title} verImagen={verImagen}/>
        </Suspense>
    }
    </>
  )
}

export default Products