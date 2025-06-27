'use client'; // Required for React hooks in Next.js 13+ App Router
import { Header } from "@/sections/Header";
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainIamge from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit';
import { useState, useEffect } from 'react';


export const HeroSection = () => {

  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  useEffect(() => {
  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let found = false;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          found = true;
          break;
        }
      }
    }

    // ✅ Extra fallback: if no section matched and you're near bottom, assume contact
    const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
    if (!found && nearBottom) {
      setActiveSection('contact');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return( 
  <>
  <Header activeSection={activeSection} />
  <div id="home" className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip '>
    {/* Background elements - moved to lower z-index to ensure content is clickable */}
    <div className='absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
    <div 
    className='absolute inset-0 -z-30 opacity-5 '
     style={{
      backgroundImage: `url(${grainIamge.src})`
    }}
    ></div>
    <div className='size-[620px] hero-ring '></div>
    <div className='size-[820px] hero-ring '></div>
    <div className='size-[1020px] hero-ring '></div>
    <div className='size-[1220px] hero-ring '></div>
    
    {/* Orbit elements - ensured they don't interfere with content clickability */}
    <HeroOrbit size={430} rotation={-14} shouldOrbit
    orbitDuration='30s' shouldSpin spinDuration='3s' >
      <SparkleIcon className='size-8 text-emerald-300/20'/>
    </HeroOrbit> 
     <HeroOrbit size={440} rotation={79} shouldOrbit
    orbitDuration='32s' shouldSpin spinDuration='3s'>
      <SparkleIcon className='size-5 text-emerald-300/20'/>
    </HeroOrbit>
    <HeroOrbit size={520} rotation={-41} shouldOrbit
    orbitDuration='34s'>
      <div className='size-2 rounded-full bg-emerald-300/20'/>
    </HeroOrbit>
    <HeroOrbit size={530} rotation={178} shouldOrbit
    orbitDuration='36s' shouldSpin spinDuration='3s'>
      <SparkleIcon className='size-10 text-emerald-300/20'/>
    </HeroOrbit>
    <HeroOrbit size={550} rotation={20}shouldOrbit
    orbitDuration='38s' shouldSpin spinDuration='6s'>
      <StarIcon className='size-12 text-emerald-300'/>
    </HeroOrbit>
    <HeroOrbit size={590} rotation={98} shouldOrbit
    orbitDuration='40s' shouldSpin spinDuration='6s'>
      <StarIcon className='size-8 text-emerald-300'/>
    </HeroOrbit>
    <HeroOrbit size={650} rotation={-5} shouldOrbit
    orbitDuration='42s'>
      <div className='size-2 rounded-full bg-emerald-300/20'/>
    </HeroOrbit>
     <HeroOrbit size={710} rotation={144} shouldOrbit
    orbitDuration='44s' shouldSpin spinDuration='3s'>
      <SparkleIcon className='size-14 text-emerald-300/20'/>
    </HeroOrbit>
    <HeroOrbit size={720} rotation={85} shouldOrbit
    orbitDuration='46s'>
      <div className='size-3 rounded-full bg-emerald-300/20'/>
    </HeroOrbit>
    <HeroOrbit size={800} rotation={-72} shouldOrbit
    orbitDuration='48s' shouldSpin spinDuration='6s'>
    <StarIcon className='size-28 text-emerald-300' />
    </HeroOrbit>
    
    </div>
    {/* Main content - increased z-index to ensure it's above background elements */}
    <div className="container relative z-10 ">
      <div className='flex flex-col items-center '>
      <Image src={memojiImage} 
      className="size-[100px]"
       alt="person peeking from behind laptop"/>
      <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg '>
        <div className='bg-green-500 size-2.5 rounded-full relative'>
          <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
        </div>
        <div className='text-sm font-medium'>Available for new projects
        </div>
      </div>
      </div>
      <div className='max-w-lg mx-auto '>
      <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide '>Building Exceptional User Experiences</h1>
      <p className='mt-4 text-center text-white/60 md:text-lg'>I specialize in transforming designs into functional, high-performing web applications. Let`s discuss your next project.
      </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        {/* Added onClick to scroll to projects section - no style changes */}
        <button 
          onClick={() => scrollToSection('projects')}
          className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl relative z-20 cursor-pointer'
        >
          <span className='font-semibold'>Explore My Work</span>
          <ArrowDown className="size-4" />
        </button>
        {/* Added onClick to scroll to contact section - no style changes */}
        <button 
          onClick={() => scrollToSection('contact')}
          className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl relative z-20 cursor-pointer'
        >
          <span>👋</span>
          <span className='font-semibold'>Lets Connect</span>
        </button>
      </div>
    </div>
  </div>
  </>
  );
};