import React from 'react'
import List from './ui/list'
import getCategories from '@/actions/getCategories'

const FooterContent = async() => {
    const categories = await getCategories()

    const termsAndConditions = [
        {
            id: 1,
            name: "Terms and conditions"
        },
        {
            id: 2,
            name: "Privacy policy"
        },
        {
            id: 3,
            name: "Refund policy"
        },
        {
            id: 4,
            name: "Shipping policy"
        },
        {
            id: 5,
            name: "Return policy"
        },
        {
            id: 6,
            name: "Cancellation policy"
        },
        {
            id: 7,
            name: "FAQ"
        },
        {
            id: 8,
            name: "Contact us"
        },
    ];

    const socialHandles = [
        {
            id: 1,
            name: "Facebook"
        },
        {
            id: 2,
            name: "Twitter"
        },
        {
            id: 3,
            name: "Instagram"
        },
        {
            id: 4,
            name: "Linkedin"
        },
    ];

  return (
    <div className='flex gap-x-4 gap-y-2'>
        <List data={categories} />
        <List data={termsAndConditions} />
        <List data={socialHandles} />
    </div>
  )
}

export default FooterContent