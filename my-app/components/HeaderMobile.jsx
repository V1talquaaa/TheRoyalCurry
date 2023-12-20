'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import IconMobMenu from '@/app/subComponents/IconMobMenu';
import IconCall from '@/app/subComponents/IconCall';
import { MobileNav } from './MobileNav';

export const HeaderMobile = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuBtnClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
        <header className='absolute z-10 top-[24px] w-full lg:hidden'>
            <div className="container">
                <div className='py-[8px] px-[18px] flex justify-between border rounded-[16px]'>
                <button type='button' onClick={menuBtnClick}><IconMobMenu /></button>
                 <Link href="/">The Royal Curry</Link>
                 <button type='tel'><IconCall /></button>
                </div>
            </div>
            {menuOpen && <MobileNav closeMenuBtn={menuBtnClick}/>}
        </header>
  )
}
