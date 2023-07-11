import { PortableTextBlock } from "sanity";

export type Project = {
    title: string            
    slug: string
    description: string
    image: string
    alt: string
    youtubeLink: string 
    githubLink: string
    liveLink: string
    content: PortableTextBlock[]
    tags: string[]
}
