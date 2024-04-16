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
        <p className='mb-3'>A <span className='font-medium'>Design graduate</span> with a passion for visual expression, I aim to expand my scope beyond surface aesthetics. My professional journey has led me to seek a deeper understanding of the creative process, prompting me to steer my career towards <span className='font-medium'>Frontend development</span>. I am <span className='underline'>excited</span> about the prospect of <span className='italic'>translating visual concepts into interactive and functional experiences</span>, leveraging my skills and knowledge in web technologies. Currently, I am immersed in intensive studies to enhance my skills and eagerly anticipate an opportunity to contribute as a Frontend Developer in a workplace where I can apply my passion for creating engaging interfaces and collaborate in a dynamic and innovative environment.</p>
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
