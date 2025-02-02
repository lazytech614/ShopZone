"use client"

import React, {useState} from 'react'
import { Filter as FilterIcon } from 'lucide-react';

import { Color, Size } from '@/types';
import Button from '@/components/ui/button';
import { Dialog, DialogPanel } from '@headlessui/react';
import IconButton from '@/components/ui/iconButton';
import Filter from './Filter';

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({sizes, colors}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <>
      <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
        <FilterIcon size={20} className='mr-2' /> 
        Filters
      </Button>
      <Dialog open={isOpen} as='div' className='relative z-40 lg:hidden' onClose={onClose}>
        <div className='fixed inset-0 bg-black bg-opacity-25' />
        <div className='fixed inset-0 z-40 flex'>
          <DialogPanel className={'relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'}>
            <div className='flex items-center justify-end px-4'>
              <IconButton 
                // icon={<X size={15} />} 
                icon="X"
                onClick={onClose}
              />
            </div>
            <div className='p-4'>
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
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFilters