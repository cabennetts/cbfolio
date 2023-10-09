import React from 'react'
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import getAllImages from "@/lib/getUnsplashImages";
import { UnsplashImage } from '@/types/UnsplashImage';
import PageTitle from '@/components/global/PageTitle';

export const metadata: Metadata = {
  title: 'Other | Caleb Bennetts',
  description: 'Photos I have taken',
};

interface Photo  {
  id: number
  urls: { 
    large: string;
    regular: string;
    raw: string;
    small: string;
  }
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  }
}

export default async function OtherPage() {
  
  const imageData: Promise<UnsplashImage[]> = getAllImages(1)
  const imageData2: Promise<UnsplashImage[]> = getAllImages(2)
  const imageData3: Promise<UnsplashImage[]> = getAllImages(3)

  const images = await imageData
  const images2 = await imageData2
  const images3 = await imageData3  
  
  return (
    <main className="content__main">
      <PageTitle 
        title="Other"   
      />
      <div className='grid auto-rows-auto grid-cols-2 items-center md:grid-cols-3'>
      {images3.map(image => {
          return (    
              <div key={image.id} className='w-full p-2 '> 
                <Link href={image.links.html} className="" >
                  <Image className="object-contain w-full" width={800} height={800} src={image.urls.regular} alt={image.alt_description} />  
                </Link>
              </div>
            )
        })}

      {images.map(image => {
          return (    
              <div key={image.id} className='w-full p-2 '> 
                <Link href={image.links.html} className="" >
                  <Image className="object-contain w-full" width={800} height={800} src={image.urls.regular} alt={image.alt_description} />  
                </Link>
              </div>
            )
        })}

      {images2.map(image => {
          return (    
              <div key={image.id} className='w-full p-2 '> 
                <Link href={image.links.html} className="" >
                  <Image className="object-contain w-full" width={800} height={800} src={image.urls.regular} alt={image.alt_description} />  
                </Link>
              </div>
            )
        })}
      </div>
      
    </main>
  )
}