'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";


function AboutMe() {
const ref = useRef<HTMLDivElement>(null);
const isInView = useInView(ref, { once: true });
const [AboutMe, setAboutMe] = useState<any>(null);

  const bottomAnimation = (index: number) => ({
    initial: { y: '20%', opacity: 0 },
    animate: isInView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 1, delay: 0.8 + index * 0.3 },
  })

  return(
    
    <section id='about-me'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='grid md:grid-cols-2 gap-x-6 gap-y-8'>
              <div className='group flex items-center flex-col gap-6'>
                <motion.div
                  {...bottomAnimation(0)} className="relative"> 
                   <img
                    src="/images/home/abhi-with-srk.png"
                    alt="Bio Image"
                    className="w-md object-cover rounded-2xl"
                    />
                </motion.div>
              </div>
              <motion.div
                  {...bottomAnimation(1)} className='flex flex-col justify-between max-w-xl text-left gap-11 xl:gap-16 border border-dark_black/10 p-6 2xl:p-10 rounded-2xl bg-pale-yellow'>
                <h3 className='text-dark_black'>About <span className='instrument-font italic font-normal dark:text-black/70'>Me!</span></h3>
                <p className='text-lg text-justify text-dark_black leading-relaxed'>
                  Hi, I'm Abhishek, a Frontend Developer with practical experience in creating high-performance, scalable, and responsive web applications.
                  <br/><br/>
                  Skilled in modern web technologies and frameworks, I actively broaden my expertise to remain ahead in the ever-evolving tech landscape. I excel in team-oriented settings and am always eager to take on new challenges.</p>
                   <div className="flex gap-4">
                    <a href="https://github.com/Hell0WorldAgain" className="text-dark_black/60 dark:text-black/60 hover:text-sky-500 dark:hover:text-sky-400 text-2xl transition">
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/abhishek-choudhary-a63a40169/" className="text-dark_black/60 dark:text-black/60 hover:text-blue-700 dark:hover:text-blue-400 text-2xl transition">
                      <FaLinkedinIn />
                    </a>
                    <a href="https://www.instagram.com/_naadaan.parinda_/" className="text-dark_black/60 dark:text-black/60 hover:text-pink-600 dark:hover:text-pink-400 text-2xl transition">
                      <FaInstagram />
                    </a>
                  </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default AboutMe
