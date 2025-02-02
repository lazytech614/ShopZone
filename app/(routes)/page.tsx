import React from 'react'

import Container from '@/components/ui/container'
import Billboard from '@/components/Billboard'
import getBillboard from '@/actions/getBillboard'
import getProducts from '@/actions/getProducts'
import ProductList from '@/components/ProductList'

export const revalidate = 0

const HomePage = async () => {
  const billboard = await getBillboard("1ca12870-8e7b-4167-8048-13f2e8b2e44b")
  const products = await getProducts({})

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        {/* @ts-ignore */}
        <Billboard  data={billboard}/>
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title="Featured Products" items={products}/>
        </div>
      </div>
    </Container>
  )
}

export default HomePage