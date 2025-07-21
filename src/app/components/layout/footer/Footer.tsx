import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../header/Logo'

const Footer = () => {
  const [footerData, setfooterData] = useState<any>(null);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('/api/footer-data')
          if (!res.ok) throw new Error('Failed to fetch')
          const data = await res.json()        
          setfooterData(data?.footerData)
        } catch (error) {
          console.error('Error fetching services:', error)
        }
      }
  
      fetchData()
    }, [])

  return (
    <footer className='xl:pt-20 pb-6'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row py-16 gap-10 justify-between border-b border-dark_black/10 dark:border-white/10'>
          <div className='flex flex-col gap-6 max-w-md'>
            <Logo />
            <p className='opacity-60'>{footerData?.brand?.tagline}</p>
            <div className='flex gap-4'>
              {footerData?.brand?.socialLinks.map((item:any, index:any) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    target='_blank'
                    className='hover:opacity-60'>
                    <Image
                      key={index}
                      src={item.icon}
                      className='dark:hidden'
                      alt='social-icon'
                      height={20}
                      width={20}
                    />
                    <Image
                      src={item.dark_icon}
                      className='dark:block hidden'
                      alt='social-icon'
                      height={20}
                      width={20}
                    />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className='grid sm:grid-cols-3 gap-6'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>{footerData?.sitemap?.name}</p>
              <ul className='flex flex-col gap-3'>
                {footerData?.sitemap?.links.map((item:any, index:any) => {
                  return (
                    <li
                      key={index}
                      className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                      <Link href={item.url}>{item.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>{footerData?.otherPages?.name}</p>
              <ul className='flex flex-col gap-3'>
                {footerData?.otherPages?.links.map((item:any, index:any) => {
                  return (
                    <li
                      key={index}
                      className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                      <Link href={item.url}>{item.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>{footerData?.contactDetails?.name}</p>
              <p className='text-dark_black/60 dark:text-white/60'>
                {footerData?.contactDetails?.address}
              </p>
              <p className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                <Link href={`mailto:${footerData?.contactDetails?.email}`}>
                  {footerData?.contactDetails?.email}
                </Link>
              </p>
              <p className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                <Link href={`tel:${footerData?.contactDetails?.phone}`}>
                  {footerData?.contactDetails?.phone}
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <p className='text-dark_black/60 dark:text-white/60'>
            {footerData?.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
