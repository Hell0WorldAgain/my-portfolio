"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';

function TechStack() {
  const [techStackList, settechStackList] = useState<any[]>([]);

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

  // Example: Choose which icons to show in each section by index or by filtering
  const frontendIcons = techStackList.filter(item =>
    ['React JS', 'Next JS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'].includes(item.title)
  );
  const backendIcons = techStackList.filter(item =>
    ['PHP', 'GitHub', 'AWS', 'Shopify', 'WordPress'].includes(item.title)
  );

  return (
    <section>
      <div className="container 2xl:py-20 py-11">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Frontend & UI Column */}
          <div className="bg-pale-yellow dark:bg-white/5 rounded-2xl p-8 min-h-[350px] flex flex-col items-center shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-dark_black dark:text-white">Frontend & UI</h3>
            <div className="grid grid-cols-3 gap-8 w-full justify-items-center">
              {frontendIcons.map((item: any, idx: number) => (
                <div key={idx} className="flex flex-col items-center gap-2">
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
                  <span className="text-xs text-dark_black dark:text-white text-center">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Backend & Tools Column */}
          <div className="bg-blue-50 dark:bg-blue-950 rounded-2xl p-8 min-h-[350px] flex flex-col items-center shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-dark_black dark:text-white">Backend & Tools</h3>
            <div className="grid grid-cols-3 gap-8 w-full justify-items-center">
              {backendIcons.map((item: any, idx: number) => (
                <div key={idx} className="flex flex-col items-center gap-2">
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
                  <span className="text-xs text-dark_black dark:text-white text-center">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack