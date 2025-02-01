"use client"

import React, {useState, useEffect} from 'react'

import { formattor } from '@/lib/utils'

interface CurrencyProps {
    value?: string | number
    type?: string
}

const Currency: React.FC<CurrencyProps> = ({
    value,
    type
}) => {
    const [inMounted, setInMounted] = useState(false)

    useEffect(() => {
        setInMounted(true)
    }, [])

    if(!inMounted) return null

  return (
    <div className='font-semibold'>
        {formattor.format(Number(value))}
    </div>
  )
}

export default Currency