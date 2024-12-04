import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <p className='text-xl font-medium mb-5'>PAGES</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>acceuil</li>
                <li>oeuvre</li>
                <li>bibliography</li>
                <li>contact</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>CONTACTEZ MOI</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+ 77 088 24 00</li>
                <li>laminendiaye@gmail.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ LamineNdiaye.com - tous droits résèrvés.</p>
        </div>

    </div>
  )
}

export default Footer
