import React from 'react'
import Posts from '@/components/blog/Posts'
import 'highlight.js/styles/devibeans.css'
import PageTitle from '@/components/global/PageTitle'
// export const revalidate = 0
export const revalidate = 86400
export const metadata = {
  title: "Blog | Caleb Bennetts",
  description: "Blog Posts Written by Caleb",
}

export default async function BlogPage() {

  return (
    <main className="content__main">
      <PageTitle title="Blog" />
      <Posts />
    </main>
  )
}