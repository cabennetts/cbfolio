import React from 'react'
import Posts from '@/components/blog/Posts'
import 'highlight.js/styles/devibeans.css'
import { Separator } from '@/components/ui/separator'
export const revalidate = 15
export const metadata = {
  title: "Blog | Caleb Bennetts",
  description: "Blog Posts Written by Caleb",
}

export default async function BlogPage() {

  return (
    <main className="content__main">
      <h1 className='text-5xl font-extrabold tracking-widest p-8'>Blog</h1>
      <Separator color="bg-white" className="my-6"/>
      <Posts />
      
    </main>
  )
}