import { PortableTextBlock } from "sanity";

export type Blog = {
    title: string            
    slug: string
    description: string
    image: string
    alt: string
    content: PortableTextBlock[]
    tags: string[]
}
