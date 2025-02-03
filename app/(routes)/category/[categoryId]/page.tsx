import React from 'react'

import getColors from '@/actions/getColors'
import getProducts from '@/actions/getProducts'
import getSingleCategory from '@/actions/getSingleCategory'
import getSizes from '@/actions/getSizes'
import Billboard from '@/components/Billboard'
import Container from '@/components/ui/container'
import Filter from './components/Filter'
import MobileFilters from './components/MobileFilters'
import NoResult from '@/components/ui/noResult'
import ProductCard from '@/components/ui/productCard'
import CategoryBanner from '@/components/CategoryBanner'

interface CategoryPageProps {
    params: {categoryId: string}
    searchParams: { 
        colorId: string
        sizeId: string
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })
    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getSingleCategory(params.categoryId)
    
  return (
    <div className='bg-white'>
        <Container>
            {/* @ts-expect-error I did it intentionally */}
            <CategoryBanner categoryImage={category?.categoryImage} name={category?.name} />
            <div className='px-4 sm:px-6 lg:px-8 pb-24'>
                <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
                    <MobileFilters 
                        sizes={sizes}
                        colors={colors}
                    />
                    <div className='hidden lg:block'>
                        <Filter 
                            valueKey='sizeId'
                            name='Sizes'
                            data={sizes}
                        />
                        <Filter 
                            valueKey='colorId'
                            name='Colors'
                            data={colors}
                        />
                    </div>
                    <div className='mt-6 lg:col-span-4 lg:mt-0'>
                        {products.length === 0 && <NoResult />}
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                            {products.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    product={item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CategoryPage