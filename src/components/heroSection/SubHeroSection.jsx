import React from 'react'

const SubHeroSection = () => {
  return (
    <div className='w-full border-y border-lightgrey text-lightgrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-brown'>
      <p className='md:block sm:hidden'>Researcher</p>
      <p className='md:block sm:hidden'>Builder</p>
      <p>Published</p>
    </div>
  );
};

export default SubHeroSection
