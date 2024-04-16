"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

 
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const {
    setActiveSection,
    setTimeOfLastClick,
   } = useActiveSectionContext();

  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <Image src={`/IMG_9794.jpeg`} 
                alt="Ana's profile picture"
                width={`192`} 
                height={`192`} 
                quality={`95`} 
                priority={true} 
                className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
                <span className='absolute bottom-0 right-0 text-4xl'>
                    👋
                </span>
            </div>
        </div>
        <h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
        <span className="font-bold">Hello, Ana Karoline.</span> I'm a{" "}
        <span className="font-bold">Junior Frontend developer</span>. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>
        </h1>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
          <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          >Contact me here<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> 
          </Link>
          
          <a href="/Ana Karoline Caturelli da Silva - Front-End Developer.pdf" download className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border borderBlack dark:bg-white/10'>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/> </a>
          
          <a href="https://www.linkedin.com/in/anakaroline/" target='_blank' className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border borderBlack dark:bg-white/10 dark:text-white/60'>
            <BsLinkedin />
          </a>
          
          <a href="https://github.com/anakarolcatu" target='_blank' className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border borderBlack dark:bg-white/10 dark:text-white/60'>
            <FaGithubSquare />
          </a>
        </div>
    </section>
  )
}
