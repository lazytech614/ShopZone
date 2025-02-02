"use client"

import React, {useEffect, useState} from 'react'

import PreviewModal from '@/components/previewModal'

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) return null

  return (
    <>
        <PreviewModal />
    </>
  )
}

export default ModalProvider