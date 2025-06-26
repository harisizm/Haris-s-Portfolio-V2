import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import { title } from "process";
import javascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CssIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'

const toolboxItems = [
  {
    title: 'JavaScript',
    icon: '',
  },
  {
    title: 'HTML5',
    icon: '',
  },
  {
    title: 'CSS3',
    icon: '',
  },
  {
    title: 'React',
    icon: '',
  },
  {
    title: 'Github',
    icon: '',
  },
  
]

export const AboutSection = () => {
  return (
  <div className="pb-96">
    <SectionHeader 
    eyebrow="About Me"
     title="A Glimpse Into My World"
     description="Learn more about who I am, what I do, and what inspires me."/>
     <div>
      <Card>
        <div>
          <StarIcon/>
          <h3>My Reads</h3>
          <p>Explore the books shaping my perspectives.</p>
        </div>
        <Image src={bookImage} alt="book cover"/>
      </Card>
      <Card>
        <div>
          <StarIcon/>
          <h3>My Toolbox</h3>
          <p>
            Explore the technologies and tools I use to craft exceptional digital experiences.
            </p>
        </div>
        <div>

        </div>
      </Card>
     </div>
  </div>
  );
};
