"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { cn } from '@/lib/utils'
import { Category } from '@/types'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { MenuIcon } from 'lucide-react'
  

interface MainNavProps {
    data: Category[]
}

const MainNav:React.FC<MainNavProps> = ({data}) => {
    const pathname = usePathname()

    const routes = data.map((item: any) => ({
        href: `/category/${item.id}`,
        label: item.name,
        active: pathname === item.href
    }))

  return (
    <nav className='flex justify-end flex-1 pr-2 md:block md:pr-0'>
        <div className='hidden mx-6 md:flex items-center space-x-4 lg:space-x-6'>
            {routes.map((route: any) => (
            <Link 
                key={route.href} 
                href={route.href} 
                className={cn(
                    "text-sm font-medium transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500")}
            >
                {route.label}
            </Link>
        ))}
        </div>
        <div className='md:hidden'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MenuIcon className='w-6 h-6' />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='flex flex-col gap-y-2 p-4'>
                    {routes.map((route: any) => (
                        <Link 
                            key={route.href} 
                            href={route.href} 
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-black",
                                route.active ? "text-black" : "text-neutral-500")}
                        >
                            {route.label}
                        </Link>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </nav>
  )
}

export default MainNav