import { Sidebar } from '../Sidebar';
import React from 'react'
import { Metadata } from "next";
import PageTitle from '@/components/global/PageTitle';
import CloudinaryImage from '../CloudinaryImage';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { getByTag } from '@/lib/cloudinary';


type Props = {
    params: {
        album: string
    }
}

export async function generateMetadata({ params: { album } }: Props) {
    return {
        title: `${album} | Caleb Bennetts`
    }
}
export default async function Album({ params: { album } }: Props) {
    
    const images = await getByTag(album, 10)

  return (
    <>
    <main className='bg-theme-background text-theme-text flex flex-col min-h-screen pt-24'>
        <div className="hidden md:block">
            <div className="border-t">
                <div className="bg-background">
                    <div className="grid lg:grid-cols-5">
                        <Sidebar className="hidden lg:block" />
                        <div className="col-span-3 lg:col-span-4 lg:border-l">
                            <div className="h-full px-4 py-6 lg:px-8">
                            <ScrollArea>
                                <div className="flex space-x-4 pb-4">
                                {images!.resources.map((img) => (
                                    <>
                                    <CloudinaryImage publicId={img.public_id} />  
                                    </>
                                ))}
                                </div>
                                <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}
