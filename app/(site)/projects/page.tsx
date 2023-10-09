import React from 'react'
import ProjectCard from '@/components/shared/ProjectCard'
import { getProjects } from '@/sanity/sanity-utils'
import PageTitle from '@/components/global/PageTitle'

export const revalidate = 86400
// export const revalidate = 0
export const metadata = {
  title: "Projects | Caleb Bennetts",
  description: "Projects Caleb has completed",
}

export default async function ProjectsPage() {
  // Fetch projects
  const projects = await getProjects()
  
  return (
    <main className="content__main">
      <PageTitle 
        title="Projects"
      />
      <section className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        { projects.map((p) => {
          return (
            <ProjectCard 
              key={p.slug} 
              title={p.title} 
              slug={p.slug} 
              description={p.description} 
              image={p.image} 
              alt={p.alt} 
            />
          )
        })}
      </section>
    </main>
  )
}