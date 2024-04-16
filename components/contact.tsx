import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import SectionHeading from './section-heading';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    

  return (
    <section ref={ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>If you wish to contact me, you can do through this form or my social pages.</p>

        <form className='mt-10 flex flex-col dark:text-black' 
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}>
            <input className='h-14 px-4 rounded-lg borderBlack mb-3 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' name='senderName' type="string" placeholder='Your name' required maxLength={50}/>
            <input className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' name='senderEmail' type="email" placeholder='Your email' required maxLength={500}/>
            <textarea className='h-52 my-3 rounded-lg borderBlack p-4 resize-none dark:bg-white dark:bg-opacity-80  dark:focus:bg-opacity-100 transition-all dark:outline-none'  name='message' placeholder='Your message' required maxLength={300} />
            <SubmitBtn />
        </form>
    </section>
  )
}
