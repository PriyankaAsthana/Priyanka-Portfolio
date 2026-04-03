import React from 'react';

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
      <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
      <p className='text-white'>
        I'm Priyanka Asthana — a final-year CSE undergrad at AITM Varanasi, ranked first in my department for three consecutive years.<br /><br />
        My research sits at the intersection of NLP, constrained reasoning, and real-world AI deployment in healthcare.<br />
        I don't just build models — I ask why they break, and what it would take to make them trustworthy.<br /><br />
        I've filed an Indian patent for an NLP-based medical voice assistant, co-authored a paper under review at Springer Nature,<br />
        and built systems tested on 500+ real patient scenarios.<br /><br />
        Everything I've built — RAKT, DiagnoseAI, Kashivani — was conceived independently, with no lab funding and no blueprint.<br />
        That's not a complaint. That's just how I work.<br /><br />
        Currently: NLP Researcher at IIT BHU. Next: pushing the boundaries of what constrained language systems can do.
      </p>
    </div>
  );
};

export default AboutMeText;
