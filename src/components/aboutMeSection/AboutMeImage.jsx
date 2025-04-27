import React from 'react'

const AboutMeImage = () => {
  return (
    <div className='h-[430px] w-[200px] relative'>
      <div className='h-[440px] w-[300px] rounded-[100px] absolute overflow-hidden'>
        <img src="/images/about-me.jpg" alt="About-me image" className='h-full w-auto object-cover'/>
      </div>
      <div className='h-[450px] w-[250px] bg-orange absolute bottom-[-20px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10'></div>
    </div>
  );
};

export default AboutMeImage
