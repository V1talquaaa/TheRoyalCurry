import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';


export const Footer = () => {
  return (
    <section className='pt-[32px] pb-[70px] bg-orange-500 text-white text-center'>
        <div className="container flex justify-between items-center">
            <h2 className='text-5xl'>The Royal Curry</h2>
            <ul>
                <li className='mb-[12px]'><a href="">About Us</a></li>
                <li className='mb-[12px]'><a href="">Preferences</a></li>
                <li className='mb-[12px]'><a href="">Reviews</a></li>
                <li className='mb-[12px]'><a href="">Gallery</a></li>
                <li className=''><a href="">Main</a></li>
            </ul>
            <div>
                <h3>Follow us on:</h3>
                <ul className='flex justify-between'>
                    <li className='mr-[12px]'><a href=""><TelegramIcon fontSize='large'/></a></li>
                    <li className='mr-[12px]'><a href=""><InstagramIcon fontSize='large'/></a></li>
                    <li><a href=""><FacebookIcon fontSize='large'/></a></li>
                </ul>
            </div>
            <div className='text-left'> 
                <h3>Adress:</h3>
                <p className='mb-[24px]'>815 Wayne Ave, Chambersburg, PA 17201</p>
                <h3>Phone:</h3>
                <p>717-263-2660</p>
            </div>
        </div>
    </section>
  )
}
