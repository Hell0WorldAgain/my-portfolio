'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


function AboutMe() {
const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const [AboutMe, setAboutMe] = useState<any>(null);

  const bottomAnimation = (index: any) => ({
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
  })

  return(
    <section id='creative-mind'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='grid md:grid-cols-2 gap-x-6 gap-y-8'>
              <div className='group flex flex-col gap-6'>
                <div className="relative"> 
                   <img
                    src="/images/home/creative/abhi-with-srk.png"
                    alt="Bio Image"
                    className="w-md object-cover rounded-2xl"
                    />
                </div>
              </div>
              <div className='max-w-xl text-left flex items-center'>
                <h4 className='group-hover:text-purple_blue'>About Me</h4>
                <p className='mt-6 text-gray-600 leading-relaxed'>
                  Hi! I'm Abhishek, a Frontend Developer with practical experience in creating high-performance, scalable, and responsive web applications.
                  <br/><br/>
                  Skilled in modern web technologies and frameworks, I actively broaden my expertise to remain ahead in the ever-evolving tech landscape. I excel in team-oriented settings and am always eager to take on new challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default AboutMe
