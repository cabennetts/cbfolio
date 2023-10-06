import { getProject } from "@/sanity/sanity-utils";
import { Metadata } from "next";
import { FaGithub, FaYoutube, FaLink } from 'react-icons/fa';
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/shared/RichTextComponent";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import ShareBtn from "@/components/shared/ShareBtn";

// export const revalidate = 0
export const revalidate = 86400

type Props = {
  params: {slug: string}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
      
        const slug = params.slug    
        const metapost = await getProject(slug)
        console.log(slug)
        if(!metapost) return {
            title: "Not Found",
            description: "The page you are looking for does not exist.",
        }
        return {
            title: metapost.title,
            description: metapost.description,
            alternates: {
                canonical: `/projects/${slug}`
            },
            
        }
    } catch (error) {
        console.error(error)
        return {
            title: "Not Found",
            description: "The page you are looking for does not exist.",
        }
    }
}

export default async function Project({ params }: Props) {

  const slug = params.slug;
  const post = await getProject(slug);

  return (
    <main className="content__main">
        <article>
            <section className="mb-4">
                <div className="grid grid-rows-5 grid-cols-1 md:grid-rows-2 md:grid-cols-2">
                    <h1 className="text-5xl font-bold row-span-3 uppercase p-6 cursor-pointer tracking-wider md:text-5xl md:col-span-2"> {post.title}</h1>
                    
                    {post.description && (
                        <p className="text-xl pl-6 text-zinc-400 md:text-2xl">{post.description}</p>
                    )}

                    <div className="flex flex-row text-3xl pl-6 md:pr-6 justify-start md:justify-end">
                        {post.githubLink && (
                            <Link href={post.githubLink} className="min-w-[48px]">
                                <FaGithub width={32} height={32} className="mx-2" />
                            </Link>    
                        )}

                        {post.youtubeLink && (
                            <Link href={post.youtubeLink} className="min-w-[48px]">
                                <FaYoutube width={32} height={32} className="mx-2"/>
                            </Link>    
                        )}

                        {post.liveLink && (
                            <Link href={post.liveLink} className="min-w-[48px]">
                                <FaLink width={32} height={32} className="mx-2"/>
                            </Link>    
                        )}

                    </div>
                </div>
            </section>
                    
            {post.image && (
                <section className="md:my-12">
                    <div className="py-4 grid place-content-center">
                        <Image 
                            src={post.image}
                            width={800}
                            height={800}
                            alt={post.alt? post.alt : ''}
                        />
                    </div>
                </section>
            )}

            {post.tags && (
                <section className="p-4 pl-6 border-l-2 bg-gray-500 bg-opacity-25">
                    <h2 className="text-xl font-bold pb-2">Technologies Used</h2>
                    <div className=" flex overflow-auto h-auto">
                        {post.tags.map((tag) => (
                            <p key={tag} className='pr-2'> #{tag}</p>
                        ))}
                    </div>
                </section>
            )}
            
            
            {post.content && (
                <section>
                    <PortableText value={post.content} components={RichTextComponents} />
                </section>
            )}

            <Separator color="bg-white" className="my-6"/>

            <div className='flex ml-6 mt-6 flex-col md:flex-row'>

                <div className='md:pr-6 flex items-center'>
                    <Link href="/projects">
                        <p className='text-lg w-fit rounded-xl cursor-pointer text-center hover:text-blue-500 md:text-2xl'>
                            Other Projects
                        </p>
                    </Link>
                </div>
                <ShareBtn url={`https://cabennetts.dev/projects/${slug}`}/>
            </div>

        </article>
    </main>
  )
}