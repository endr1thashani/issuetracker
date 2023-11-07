'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'
import classNames from 'classnames'
const NavBar = () => {
    //Style active nav
    const currentPath = usePathname()
    const links = [
        {
            label : 'Dashboard',
            href: '/'
        },
        {
            label : 'Issues',
            href: '/issues'
        }
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug/></Link>
        <ul className='flex space-x-6'>
            {
                links.map((item , index) => (
                    <li key={index}>
                        <Link 
                            className={classNames({
                                'text-zinc-900 font-bold' : item.href === currentPath,
                                'text-zinc-500' : item.href !== currentPath,
                                'hover:text-zinc-800 transition-colors' : true
                            })} 
                            href={item.href}>
                            {item.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default NavBar