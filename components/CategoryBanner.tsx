import { Category } from '@/types'
import React from 'react'

interface CategoryBannerProps {
    categoryImage: Category
    name: string
}

const CategoryBanner: React.FC<CategoryBannerProps> = ({
    categoryImage,
    name
}) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
        <div 
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${categoryImage})`,
            }} 
            className='aspect-square rounded-xl relative md:aspect-[2.4/1] overflow-hidden bg-cover bg-center'
        >
            <div className='absolute inset-0 flex flex-col justify-center items-center text-center gap-y-8'>
                <div className='font-bold text-4xl sm:text-5xl lg:text-6xl text-white max-w-xs sm:max-w-xl px-4'>
                    <h2 className='mb-4 text-shadow-lg'>
                        {name}
                    </h2>
                    <div className='w-full h-1 bg-white/80 mx-auto rounded-full' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryBanner