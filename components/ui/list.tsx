import { Category } from '@/types'
import React from 'react'

interface ListProps {
    data: Category[] | {
        id: number;
        name: string;
    }[]
}

const List: React.FC<ListProps> = ({data}) => {
  return (
    <div>
        <h4 className='text-xs font-bold uppercase'>Online Shopping</h4>
        <div className='mt-2 text-gray-500'>
            {data.map((category) => (
                <p key={category.id} className='text-sm font-medium transition-colors hover:text-black cursor-pointer'>{category.name}</p>
            ))}
        </div>
    </div>
  )
}

export default List