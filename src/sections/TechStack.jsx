import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { techStackIcons, techStackImgs } from '../constants/index.js';
import TechIcon from '../components/Models/TechIcon.jsx';
import TitleHeader from '../components/TitleHeader.jsx';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const scope = useRef();

  useGSAP(() => {
    gsap.fromTo(
      '.tech-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#skills',
          start: 'top center',
        },
      }
    );
  }, { scope });

  return (
    <div ref={scope} id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />
        <div className='tech-grid'>
          {techStackIcons.map((icon) => (
            <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg xl:w-40 xl:h-40">
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out">
                  <TechIcon model={icon} />
                </div>
                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
          {techStackImgs.map((icon) => (
            <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg xl:w-40 xl:h-40">
              <div className='tech-card-animated-bg'/>
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <img src={icon.imgPath}  alt={icon.name}/>
                </div>
                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
