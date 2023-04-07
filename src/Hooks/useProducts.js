import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const useProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    const [active, setactive] = useState(false)
    
    //Traer todos los productos
    const getProducts=()=>{
        const url="https://e-commerce-api-v2.academlo.tech/api/v1/products";
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
        <NavLink to={id}/>
    }

    //mostrar resumen
    const hoverActive=()=>{
        setactive(true)
     };
     const hoverInactive=()=>{
         setactive(false)
      };
    
    return {allProducts,hoverActive,hoverInactive,active,navProduct}
}

export default useProducts
