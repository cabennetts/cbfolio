import React from 'react'
import { Metadata } from "next";
import PageTitle from '@/components/global/PageTitle';
import CloudinaryImage from './CloudinaryImage';
import cloudinary from "cloudinary";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { FaPlusCircle } from 'react-icons/fa';
import { Sidebar } from './Sidebar';
import { getByTag } from '@/lib/cloudinary';

export const metadata: Metadata = {
  title: 'Other | Caleb Bennetts',
  description: 'Photos I have taken',
};

type SearchResults = {
  public_id: string;
}
// export type SearchResults = {
//   public_id: string;
//   tags: string[];
// }

export default async function OtherPage() {

  const images = await getByTag("favorite", 10)

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
                  <Tabs defaultValue="featured" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="featured" className="relative">
                          Featured
                        </TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button>
                          <FaPlusCircle className="mr-2 h-4 w-4" />
                          Support Me!
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="featured"
                      className="border-none p-0 outline-none"
                    >
                      <div className="col-span-3 lg:col-span-4 lg:border-l">
                        <div className="h-full px-4 py-6 lg:px-8">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <h2 className="text-2xl font-semibold tracking-tight">
                                My Favorites
                              </h2>
                              <p className="text-sm text-muted-foreground">
                                Photos that I love the most
                              </p>
                            </div>
                          </div>
                          <Separator className="my-4" />
                          <div className="relative">
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
                          <div className="mt-6 space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">
                              Recently Added
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              Photos I shared within the last month
                            </p>
                          </div>
                          <Separator className="my-4" />
                          <div className="relative">
                            <ScrollArea>
                              <div className="flex space-x-4 pb-4">                      
                                {/* {images!.resources.map((img) => (
                                  <>
                                    <CloudinaryImage publicId={img.public_id} />  
                                  </>
                                ))} */}
                              </div>
                              <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="about"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Why Photography
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Gear I use
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
    // <main className="content__main">
    //   <PageTitle 
    //     title="Other"   
    //   />

    //   <section className='grid grid-cols-3 gap-4'>
    //     {images.resources.map((img) => (
    //       <>
    //         <CloudinaryImage publicId={img.public_id} />  
    //       </>
    //     )
    //     )}
    //   </section>
    // </main>
  )
}