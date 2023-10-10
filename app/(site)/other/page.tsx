import React from 'react'
import { Metadata } from "next";
import PageTitle from '@/components/global/PageTitle';
import CloudinaryImage from './CloudinaryImage';
import cloudinary from "cloudinary";

export const metadata: Metadata = {
  title: 'Other | Caleb Bennetts',
  description: 'Photos I have taken',
};

type SearchResults = {
  public_id: string;
}

export default async function OtherPage() {

  const images = await cloudinary.v2.search
  .expression('resource_type:image AND folder:gallery/*')
  .sort_by('public_id','desc')
  .max_results(30)
  .execute() as {resources: SearchResults[]}

  console.log(images)
  return (
    <main className="content__main">
      <PageTitle 
        title="Other"   
      />

      <section className='grid grid-cols-3 gap-4'>
        {images.resources.map((img) => (
          <>
            <CloudinaryImage publicId={img.public_id} />  
          </>
        )
        )}
      </section>
    </main>
  )
}