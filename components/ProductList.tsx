import React from 'react'

import { Product } from '@/types'
import NoResult from '@/components/ui/noResult'
import ProductCard from '@/components/ui/productCard'

interface ProductListProps {
    items: Product[]
    title: string
}

const ProductList: React.FC<ProductListProps> = ({
    items,
    title
}) => {
  return (
    <div className='space-y-4 pb-10'>
        <h3 className='font-bold text-3xl'>{title}</h3>
        {items.length === 0 && (
            <NoResult />
        )}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {items.map(item => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    </div>
  )
}

export default ProductList