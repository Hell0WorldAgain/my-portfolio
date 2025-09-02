"use client";
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

function TechStack() {
  const [techStackList, settechStackList] = useState<any[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false }); // animate on enter/exit

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        settechStackList(data?.techStackList || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  const languageIcons = techStackList.filter(item =>
    ['React JS', 'Next JS', 'Tailwind CSS', 'PHP', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'GraphQL'].includes(item.title)
  );
  const toolsIcons = techStackList.filter(item =>
    ['GitHub', 'AWS', 'Google Cloud', 'Firebase', 'Postman API', 'Shopify', 'WordPress', 'VS Code'].includes(item.title)
  );
 

const iconVariants: Variants = {
  hidden: (custom: number) => ({ opacity: 0, y: 40, scale: 0.8 }),
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1 + custom * 0.08,
      type: "spring"
    }
  }),
  exit: (custom: number) => ({ opacity: 0, y: -40, scale: 0.8, transition: { duration: 0.3 } })
};

  return (
    <section id="techStack">
      <div className="container 2xl:py-20 py-5">
        <div className='flex flex-col justify-center items-center gap-10 md:gap-20 py-15'>
          <h2>
            My
            <span className='instrument-font italic font-normal dark:text-white/70'>
              {' '}
              Skills
            </span>
          </h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-2 gap-x-6 gap-y-8">
          <div className="bg-pale-yellow dark:bg-white/5 rounded-2xl p-8 min-h-[350px] flex flex-col items-center shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-dark_black dark:text-white">Languages, & Libraries</h3>
            <div className="grid grid-cols-3 gap-8 w-full justify-items-center">
              {languageIcons.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={iconVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  exit="exit"
                  className="flex flex-col items-center gap-2"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain dark:hidden"
                  />
                  <Image
                    src={item.darkImg}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain hidden dark:block"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-blue-100 dark:bg-white/5 rounded-2xl p-8 min-h-[350px] flex flex-col items-center shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-dark_black dark:text-white">Tools & Platforms</h3>
            <div className="grid grid-cols-3 gap-8 w-full justify-items-center">
              {toolsIcons.map((item: any, idx: number) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={iconVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  exit="exit"
                  className="flex flex-col items-center gap-2"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain dark:hidden"
                  />
                  <Image
                    src={item.darkImg}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain hidden dark:block"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack