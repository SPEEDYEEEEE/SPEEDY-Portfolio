import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-sm text-center py-2'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-2 h-2 object-contain ml-2' alt="Arrow Icon" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className='sm:text-lg sm:leading-snug text-center neo-brutalism-blue py-2 px-4 text-white mx-3'>
      Hey! My name is <span className='font-semibold'>Wasif</span>👋🏻
      <br />
      A Full Stack MERN Developer from Pakistan.
    </h1>
  ),
  2: (
    <InfoBox
      text="I have gained experience by collaborating with various companies, acquiring a diverse set of skills throughout my professional journey."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="I've overseen multiple projects throughout my professional tenure and am keen on assessing their respective impacts."
      link="/projects"
      btnText="Visit Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="If you are currently seeking assistance with a project or are in need of a skilled developer, I am readily available and just a few keystrokes away."
      link="/contact"
      btnText="Let's Connect"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
