import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import proj1 from "@/assets/images/proj1.png"
import proj2 from "@/assets/images/proj2.png"

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2025",
    title: "E-Commerce Grocery Website (Zayrah)",
    results: [
      { title: "React, Node.js, Express.js, MongoDB, Tailwind" },
      { title: "Stripe payments and Role-based dashboards" },
      { title: "Responsive UI and  Real-time API integrations" },
    ],
    link:"https://zayrah-by-harisizm.vercel.app",
    image: proj1,
  },
  {
    company: "Innovative Co",
    year: "2025",
    title: "Fashion E-Commerce Site",
    results: [
      { title: "React.js, HTML, CSS, Javascript" },
      { title: "Category-based product listings" },
      { title: "Functional Cart page, Login/Signup pages " },
    ],
    link: "https://zayrbyharisizm.vercel.app",
    image: proj2,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    // Added id="projects" for navigation targeting - no other changes
    <section id="projects" className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow=" Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences."/> 
      <div className="flex flex-col mt-10 gap-20 md:mt-20">
        {portfolioProjects.map((project, projectIndex)=>(
          <Card 
          key={project.title}
           className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
           style={{
            top:`calc(64px + ${projectIndex *40}px`

           }}>
        
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400
              inline-flex gap-2 font-bold uppercase tracking-widest text-sm
              text-transparent bg-clip-text">
             <span> {project.company} </span>
             <span>&bull;</span>
             <span> {project.year} </span>
             </div>
            
            <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result) => (
               <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                <CheckCircleIcon className="size-5 md:size-6" />
                <span>{result.title}</span>
                 </li>
               ))}

            </ul>
            <a href={project.link}>
            <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
              <span>
              Visit Live Site
                </span>
                <ArrowUpRightIcon className='size-4' />
            </button>
            </a>
            </div>
            <div className="relative">
            <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
            </div>
          </div>
          </Card>
        ))}
      </div>
    </div>
  </section>

  );
};