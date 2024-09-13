"use client"
import React, { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Icons } from './Icon'
import Link from 'next/link'
import { Search } from 'lucide-react'

type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const router = useRouter()

  const menu_items = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "About",
      href: "#about"
    },
    {
      title: "Services",
      href: "#services"
    },
    {
      title: "Collection",
      href: "collection"
    },
    {
      title: "Contact",
      href: "#contact"
    },
  ]

  useEffect(() => {
    const currentIndex = menu_items.findIndex(item =>
      pathname.endsWith(item.href) || (pathname === '/' && item.href === '/')
    )
    setSelectedIndex(currentIndex === -1 ? 0 : currentIndex)
  }, [pathname])

  const handleNavigation = (href: string, index: number) => {
    setSelectedIndex(index)
    if (href.startsWith('#')) {
      // For hash links
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      // Update the URL without a page reload
      window.history.pushState(null, '', pathname + href)
    } else if (href === '/') {
      // For home page
      router.push(href)
    } else {
      // For other links, append to current path
      const newPath = pathname === '/' ? `/${href}` : `${pathname}/${href}`
      router.push(newPath)
    }
  }

  return (
    <div className='h-[90px] bg-white w-screen mb-8 font-family flex justify-between items-center px-2.5 md:px-6 mx-auto fixed left-0 top-0 z-10'>
      {/* Logo */}
      <div className='w-[8%] h-[50px] flex items-center justify-center'>
        <Icons.logo className='' />
      </div>

      {/* Menu Items */}
      <div className="w-[35%] h-full flex gap-2 items-center justify-start">
        {
          menu_items.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className={`relative text-sm pb-2 ml-2 ${selectedIndex === index ? 'border-b border-b-[#B38B70]' : 'hover:border-b-[#855C0C] hover:border-b'}`}
            >
              {item.title?.toUpperCase()}
            </a>
          ))
        }
      </div>

      {/* Search bar, User Profile and Cart Icon */}
      <div className="w-auto h-full flex items-center justify-center gap-4 px-8">
        <div className="w-[300px] border-0 bg-[#F8E8D6] h-[50px] bg-opacity-50 rounded flex justify-between items-center px-4">
          <input
            placeholder='What are you looking for?'
            type="text"
            className='bg-transparent w-[80%] text-[#777] placeholder:text-[#B38B70] caret-[#B38B70] border-none outline-none focus-within:outline-none focus-within:border-none focus-within:cursor-default'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className='h-6 w-6 text-[#B38B70]' />
        </div>
        <span className="border-r h-8 border-r-[#B38B70]"></span>
        <div className="flex justify-center items-center gap-3">
          {/* Favorite SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-muted-foreground hover:scale-[1.01] cursor-pointer hover:text-[#212a2a]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>

          {/* User SVG */}
          {/* eslint-disable-next-line */}
          <a href="login">
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-muted-foreground cursor-pointer hover:text-[#212a2a]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar