import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img src="/images/email-image.png" alt="Contact-me Image" className='max-w-[200px]' />
      <ContactInfo />
      <ContactSocial /> 
    </div>
  )
}

export default ContactMeRight
