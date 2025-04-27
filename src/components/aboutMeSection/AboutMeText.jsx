import React from 'react';

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>
        I’m Priyanka Asthana—the kind of developer who actually enjoys debugging at 2AM and thrives<br />
        turning caffeine and chaos into clean, scalable code.<br />
        Fluent in Java, built with DSA, and styled in Tailwind, I craft digital experiences that are fast, responsive,<br />
        and unapologetically bold.<br />
        I don’t just build websites—I architect vibes. From backend logic to pixel-perfect frontend finesse,<br />
        I bridge the gap between logic and aesthetics.<br />
        Currently deep in React & DSA, I’m leveling up every day, and loving every minute of the madness.<br />
        If you’re looking for someone who codes with precision, designs with intention,<br />
        and delivers with perfection —you just found her.
      </p>
      <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>Contact Me</button>
    </div>
  );
};

export default AboutMeText;
