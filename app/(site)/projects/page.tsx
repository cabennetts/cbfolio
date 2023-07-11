import React from 'react'
import ProjectCard from '@/components/shared/ProjectCard'
import { getProjects } from '@/sanity/sanity-utils'

export const revalidate = 15
export const metadata = {
  title: "Projects | Caleb Bennetts",
  description: "Projects Caleb has completed",
}

export default async function ProjectsPage() {
  
  // Fetch projects
  const projects = await getProjects()
  
  return (
    <main className="content__main">
      
      
      <h1 className='text-5xl font-extrabold tracking-widest p-8'>Projects</h1>

      { projects.map((p) => {
        return <ProjectCard key={p.slug} title={p.title} slug={p.slug} description={p.description} image={p.image} alt={p.alt} />
      })}

    </main>
  )
}