import React from 'react'
import BlogPostCard from '@/components/shared/BlogPostCard'
import { getBlogPosts } from '@/sanity/sanity-utils'

export const revalidate = 15
export const metadata = {
  title: "Blog | Caleb Bennetts",
  description: "Projects Caleb has completed",
}

export default async function BlogPage() {

  const posts = await getBlogPosts()

  return (
    <main className="content__main">
      <h1 className='text-5xl font-extrabold tracking-widest p-8'>Blog</h1>

      {posts.length === 0 && (
        <p className='text-xl text-center'>No posts to display</p>
      )}
      {posts.map((p) => {
        return <BlogPostCard key={p.slug} title={p.title} slug={p.slug} description={p.description} image={p.image} alt={p.alt} />
      })}      
    </main>
  )
}