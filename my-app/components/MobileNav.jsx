import Link from 'next/link'
import React from 'react'
import { Footer } from './Footer'

export const MobileNav = ({closeMenuBtn}) => {
  return (
    <nav className='fixed py-[40px] top-0 bg-green w-screen h-screen'>
        <div className="container">
            <button type='button' onClick={closeMenuBtn}><img src="/closeMenuIcon.png" alt="close" className='absolute right-[24px] top-[24px]'/></button>
            <Link href="/" className='text-2xl flex justify-center' onClick={closeMenuBtn}>The Royal Curry</Link>
            <ul className='mt-[24px]'>
                <li className='pb-[8px] mb-[24px] border-textLight border-b-[1px]'><Link href="/#about" onClick={closeMenuBtn}>About Us</Link></li>
                <li className='pb-[8px] mb-[24px] border-textLight border-b-[1px]'><Link href="/#preferences" onClick={closeMenuBtn}>Preferences</Link></li>
                <li className='pb-[8px] mb-[24px] border-textLight border-b-[1px]'><Link href="/menu" onClick={closeMenuBtn}>Menu</Link></li>
                <li className='pb-[8px] mb-[24px] border-textLight border-b-[1px]'><Link href="/#reviews" onClick={closeMenuBtn}>Reviews</Link></li>
                <li className='pb-[8px] mb-[24px] border-textLight border-b-[1px]'><Link href="/#footer" onClick={closeMenuBtn}>Book table</Link></li>
            </ul>
        </div>
        <Footer />
    </nav>
  )
}
