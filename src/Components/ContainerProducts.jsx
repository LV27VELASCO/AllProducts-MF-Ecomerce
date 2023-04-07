import React from 'react'
import Products from './Products';

const ContainerProducts = ({allProducts}) => {
  return (
    <div className="flex justify-center  gap-4 flex-wrap">
            {
              allProducts?.map(product=>(
                <Products key={product.id} product={product}/>
              ))
            }
    </div>
  )
}

export default ContainerProducts