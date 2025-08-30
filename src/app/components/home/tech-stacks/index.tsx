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
  const languageIcons = techStackList.filter(item =>
    ['React JS', 'Next JS', 'Tailwind CSS', 'PHP', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'GraphQL'].includes(item.title)
  );
  const toolsIcons = techStackList.filter(item =>
    ['GitHub', 'AWS', 'Google Cloud', 'Firebase', 'Postman API', 'Shopify', 'WordPress', 'VS Code'].includes(item.title)
  );

  return (
    <section>
      <div className="container 2xl:py-20 py-11">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-pale-yellow dark:bg-white/5 rounded-2xl p-8 min-h-[350px] flex flex-col items-center shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-dark_black dark:text-white">Languages, Frameworks & Libraries</h3>
            <div className="grid grid-cols-3 gap-8 w-full justify-items-center">
              {languageIcons.map((item: any, idx: number) => (
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
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 rounded-2xl p-8 min-h-[350px] flex flex-col items-center shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-dark_black dark:text-white">Tools & Platforms</h3>
            <div className="grid grid-cols-3 gap-8 w-full justify-items-center">
              {toolsIcons.map((item: any, idx: number) => (
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