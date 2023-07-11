import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Project } from "@/types/Project";
import { Blog } from "@/types/Blog"

export async function getProjects(): Promise<Project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            title,            
            "slug": slug.current,
            description,
            "image": image.asset->url,
            "alt": image.alt,
            youtubeLink,
            githubLink,
            liveLink,
            content,
            tags,
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            title,            
            "slug": slug.current,
            description,
            "image": image.asset->url,
            "alt": image.alt,
            youtubeLink,
            githubLink,
            liveLink,
            content,
            tags,
        }`,
        {slug}
    )
}

export async function getBlogPosts(): Promise<Blog[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "blog"]{
            title,            
            "slug": slug.current,
            description,
            "image": image.asset->url,
            "alt": image.alt,
            content,
            tags,
        }`
    )
}

export async function getBlogPost(slug: string): Promise<Blog> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "blog" && slug.current == $slug][0]{
            title,            
            "slug": slug.current,
            description,
            "image": image.asset->url,
            "alt": image.alt,
            content,
            tags,
        }`,
        {slug}
    )
}