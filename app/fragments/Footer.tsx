import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'
import { Icons } from './Icon'

type Props = {}

const Footer = (props: Props) => {

  const social_icons = [
    {
      platform: "Facebook",
      handle: 'Kitchen & Closet',
      icon: <Facebook className='h-5 w-5' />
    },
    {
      platform: "Twitter",
      handle: '@kitchen_closet',
      icon: <Twitter className='h-5 w-5' />
    },
    {
      platform: "Instagram",
      handle: '@kitchen_and_closet',
      icon: <Instagram className='h-5 w-5' />
    },
    {
      platform: "Call",
      handle: '+233203430787',
      icon: <Phone className='h-5 w-5' />
    },
    {
      platform: "Mail",
      handle: 'kitchenandcloset@gmail.com',
      icon: <Mail className='h-5 w-5' />
    },
  ]

  const user_deals = [
    {
      name: "Privacy Policy",
      href: "/#privacy"
    },
    {
      name: "Terms & Conditions",
      href: "/#ts_and_cs"
    },
  ]

  return (
    <div className='w-screen md:w-[95vw] bg-white flex flex-col justify-center items-start' id='contact'>
      <div className="w-full flex justify-between items-center px-8 py-4">
        <div className='w-[10%] h-[50px] flex items-center justify-center'>
          <Icons.logo className='' />
        </div>

        <div className="flex gap-8 items-center ml-auto mr-8" >
          {
            social_icons.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground hover:text-[#212a2a] cursor-pointer">
                {item.icon}
              </div>
            ))
          }
        </div>
      </div>


      <span className=' border-b w-full h-1 md:mx-8'></span>

      <div className="w-full flex flex-col md:flex-row md:items-center justify-between px-8 md:px-14 py-8 mb-16">
        <p className='text-muted-foreground font-CabinetGrotesk'>&copy; Kitchen & Closet 2024, All Rights Reserved </p>

        <div className='md:w-[30%] md:flex md:justify-center items-start md:gap-8 font-CabinetGrotesk '>
          {
            user_deals.map((deal, index) => (
              <p className='text-muted-foreground hover:text-[#212a2a] cursor-pointer ml-auto' key={index}>{deal?.name}</p>
            ))
          }
        </div>
      </div>


      {/* Mobile Navigation Display */}
    </div>
  )
}

export default Footer
