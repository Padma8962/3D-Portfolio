import {useRef} from 'react';
import {gsap} from 'gsap';
import{ScrollTrigger} from 'gsap/ScrollTrigger'
import{useGSAP} from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection=() =>{
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    
    useGSAP(() => {
        const projects=[project1Ref.current , project2Ref.current , project3Ref.current];
        projects.forEach((card,index) => {
        gsap.fromTo(
            card,
            {
                y:50 ,opacity:0
            },
            {
                y:0,
                opacity:1,
                duration:1,
                delay:0.3*(index+1),
                scrollTrigger:{
                    trigger: card,
                    start:'top bottom-=100',
                }
            }
        )
    })
        gsap.fromTo(
            sectionRef.current ,
            { opacity:0} ,
            {opacity:1 , duration: 1.5})
    },[]);
    return(
        <div id='work'ref={sectionRef} className='app-showcase'>
            <div className='showcaselayout'>
                {/* LEFT */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src='/images/project1.png' alt='travel sites'/>
                    </div>
                    <div className='text-content'>
                        <h2>Privacy-Preserving Federated Learning for Healthcare.</h2>
                        <p className='text-white-50 md:text-xl'>
                            An app built with Python, Flask, TensorFlow, & Flower for secure, collaborative federated learning.
                        </p>
                    </div>
                </div>
                {/* Right */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb'>
                            <img src='/images/project2.png' alt='portfolio'/>
                        </div>
                        <h2>ElectroMart – E-Commerce Website</h2>
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffefeb]'>
                            <img src='/images/project3.png' alt='YC Directory'/>
                        </div>
                        <h2>Fitness App - Spring Microservice. App</h2>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
