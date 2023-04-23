import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    const [active, setactive] = useState(false)
    const [viewImg, setviewImg] = useState(false)

    const navigate=useNavigate();
    //Traer todos los productos
    const getProducts=()=>{
        const url="https://e-commerce-api-v2.academlo.tech/api/v1/products";
        axios.defaults.baseURL="https://e-commerce-api-v2.academlo.tech";
        axios.get(url)
        .then((response)=>{
            if(response.status==200){
                setAllProducts(response.data)
            }
        })
        .catch((error)=>console.log(error))
    }
    
    useEffect(() => {
      getProducts()
    }, [])


    //navegar a producto
    const navProduct=(id)=>{
        navigate(`/product/${id}`)
    }

    //mostrar resumen
    const hoverActive=()=>{
        setactive(true)
     };
     const hoverInactive=()=>{
         setactive(false)
      };
    
      const verImagen=()=>{
        setviewImg(!viewImg)
      }
    return {allProducts,hoverActive,hoverInactive,active,navProduct,viewImg,setviewImg,verImagen}
}

export default useProducts
