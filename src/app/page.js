import Image from "next/image";
import Hero from '@/components/shared/Hero/Hero'
import About from '@/components/shared/About/About'
import ProjectCard from '@/components/shared/Projects/ProjectCard'
import Skills from '@/components/shared/Skills/Skills';
import Education from '@/components/shared/Education/Education';
import Contact from '@/components/shared/Contact/Contact';
import Footer from '@/components/shared/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <ProjectCard/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}
