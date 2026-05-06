import Image from "next/image";
import Hero from '@/components/shared/Hero/Hero'
import About from '@/components/shared/About/About'
import Projects from '@/components/shared/Projects/Projects'

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  );
}
