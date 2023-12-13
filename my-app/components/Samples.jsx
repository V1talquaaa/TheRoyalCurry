import Image from 'next/image'
import React from 'react'

export const Samples = () => {
  return (
    <section className='mt-[100px] bg-gradient-to-b from-transparent from-30% to-orange-600 to-30%' >
        <div className='container'>
            <ul className='text-textLight flex justify-around text-center'>
                <li className='w-[310px] '>
                    <Image src='/sample1.png' alt='dish' height={132} width={132} className='mx-auto mb-[12px]'/>
                    <h3 className='mb-[12px] text-xl'>Chicken Tikka kabob</h3>
                    <p className='mb-[12px] text-base'>Boneless chicken pieces, such as chicken breast or thigh, skewers</p>
                    <p className='text-xl'>$18.00</p>
                </li>
                <li className='w-[310px]'>
                    <Image src='/sample2.png' alt='dish' height={132} width={132} className='mx-auto mb-[12px]'/>
                    <h3 className='mb-[12px] text-xl'>Lamp Methee Curry</h3>
                    <p className='mb-[12px] text-base'>Methi, or fenugreek leaves, flavorful Lamb Methi Curry, onions and tomatoes </p>
                    <p className='text-xl'>$21.00</p>
                </li>
                <li className='w-[310px]'>
                    <Image src='/sample3.png' alt='dish' height={132} width={132} className='mx-auto mb-[12px]'/>
                    <h3 className='mb-[12px] text-xl'>Vindaloo Chicken wo</h3>
                    <p className='mb-[12px] text-base'>Boneless chicken pieces, various spices and aromatics, white wine vinegar</p>
                    <p className='text-xl'>$16.00</p>
                </li>

            </ul>
        </div>
    </section>
  )
}
