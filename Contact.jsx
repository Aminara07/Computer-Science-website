import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={'https://i.pinimg.com/736x/cf/1d/a0/cf1da05606943eafc69f9116c259e72f.jpg'} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Atelier</p>
          <p className=' text-gray-500'>5443 adress <br />Dakar, Senegal</p>
          <p className=' text-gray-500'>Tel: +770882400 <br /> Email: LamineNdiaye@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
