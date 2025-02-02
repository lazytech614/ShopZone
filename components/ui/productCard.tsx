"use client"

import React, { MouseEventHandler } from 'react'
import Image from 'next/image'
import { Expand, ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Product } from '@/types'
import IconButton from '@/components/ui/iconButton'
import Currency from '@/components/ui/currency'
import usePreviewModal from '@/hooks/usePreviewModal'

interface ProductCardProps {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const router = useRouter()
    const previewModal = usePreviewModal()

    const handleClick = () => {
        router.push(`/product/${product?.id}`)
    }

    const onPreview:MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        previewModal.onOpen(product)
    }
    
  return (
    <div onClick={handleClick} className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
        <div className='aspect-square bg-gray-100 relative'>
            <Image src={product?.images?.[0].imageUrl} alt={product.name} fill className='aspect-square object-cover rounded-md'/>
            <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
                <div className='flex gap-x-6 justify-center'>
                    <IconButton 
                        onClick={onPreview}
                        icon={<Expand size={20} className='text-gray-600' />}
                    />
                    <IconButton 
                        onClick={() => {}}
                        icon={<ShoppingCart size={20} className='text-gray-600' />}
                    />
                </div>
            </div>
        </div>
        <div>
            <p className='font-semibold text-lg'>
                {product.name}
            </p>
            <p className='text-sm text-gray-500'>
                {product.category?.name}
            </p>
        </div>
        <div className='flex items-center justify-between'>
            <Currency value={product.price} type="Dollar" />
        </div>
    </div>
  )
}

export default ProductCard