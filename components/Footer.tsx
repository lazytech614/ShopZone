import React from 'react'
import Container from '@/components/ui/container'
import { BadgeCheck, Facebook, FacebookIcon, InstagramIcon, Repeat, TwitchIcon } from 'lucide-react'
import getCategories from '@/actions/getCategories'
import List from './ui/list'
import FooterContent from './FooterContent'

const Footer = () => {
  // const categories = await getCategories()

  return (
    <footer className='bg-white border-t'>
        <Container>
          <div className='px-4 sm:px-6 lg:px-8 py-10'>
            <div className='flex items-start justify-between flex-wrap gap-x-4 gap-y-2'>
              <FooterContent />
              <div className='md:ml-auto'>
                <div className='flex items-center gap-x-2 max-w-[240px]'>
                  <BadgeCheck size={60}/>
                  <p className='text-sm text-gray-500'>
                    <span className='font-bold text-base text-black'>100% original products</span> guarantee at ShopZone.
                  </p>
                </div>
                <div className='flex items-center gap-x-2 max-w-[240px]'>
                  <Repeat size={60}/>
                  <p className='text-sm text-gray-500'>
                    <span className='font-bold text-base text-black'>Return within 7 days</span> of recieving your order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
    </footer>
  )
}

export default Footer