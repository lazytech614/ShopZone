import React from 'react'

import Container from '@/components/ui/container'
import Billboard from '@/components/Billboard'
import getBillboard from '@/actions/getBillboard'
import getProducts from '@/actions/getProducts'
import ProductList from '@/components/ProductList'
import getAllBillboards from '@/actions/getAllBillboards'
import { Billboard as BillboardType } from '@/types'

export const revalidate = 0

const HomePage = async () => {
  const billboards = await getAllBillboards();

  const activeBillboard = billboards.find((billboard: BillboardType) => billboard.isActive === true)

  const billboard = await getBillboard(activeBillboard?.id as string)
  const products = await getProducts({
    isFeatured: true
  })

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        {/* @ts-expect-error I did it intentionally */}
        <Billboard  data={billboard}/>
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title="Featured Products" items={products}/>
        </div>
      </div>
    </Container>
  )
}

export default HomePage