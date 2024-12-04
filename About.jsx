import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>


      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={'https://i.pinimg.com/736x/cf/1d/a0/cf1da05606943eafc69f9116c259e72f.jpg'} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos saepe, minima, rem architecto asperiores dolorem eum, inventore sequi culpa modi et dignissimos nobis! Quaerat ipsa ut ad reiciendis mollitia voluptatem?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quisquam temporibus dicta facere sint pariatur unde quis repudiandae reprehenderit dolorum minus nobis neque rerum debitis possimus doloremque. Praesentium, expedita a.</p>
          </div>
      </div>
      
    </div>
  )
}

export default About
