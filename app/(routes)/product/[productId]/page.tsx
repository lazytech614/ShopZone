import React from 'react'

import getProducts from '@/actions/getProducts'
import getSingleProduct from '@/actions/getSingleProduct'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'
import Gallery from '@/components/gallery'
import Info from '@/components/Info'

const ProductViewPage = async ({params}: {params: {productId: string}}) => {
  const product = await getSingleProduct(params.productId)
  const suggestedProducts = await getProducts({
    // @ts-expect-error I did it intentionally
    categoryId: product?.categoryId
  })
  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
            {/* @ts-expect-error I did it intentionally */}
            <Gallery images={product.images}/>
            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
              {/* @ts-expect-error I did it intentionally */}
              <Info product={product} />
            </div>
          </div>
          <hr className='my-10'/>
          <ProductList title='Related Items' items={suggestedProducts} />
        </div>
      </Container>
    </div>
  )
}

export default ProductViewPage