"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");
  

  return (
    <section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' 
    id='about'>
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>Hello! <span className='font-medium'>I'm Ana, a Development student.</span> Currently in the process of transitioning from a Design career to<span className='font-medium'> Development</span>. With experience as a Freelance UI Designer, I have developed a solid foundation in <span className='underline'>design processes and principles, attention to detail, and meeting deadlines.</span> As a <span className='italic'>creative problem solver with a keen eye for detail</span>, I am committed to delivering high-quality work and exceeding expectations. I continually seek to enhance my technical and interpersonal skills through courses and volunteer project experience. I am eager for an opportunity to apply all the knowledge I have gained in a real professional setting.</p>
        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, painting and reading. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning how to speak{" "}
        <span className="font-medium">Italian</span>. I'm also
        learning watercolor and digital painting.
        </p>
    </section>
  )
}
