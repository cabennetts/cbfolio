import { getBlogPost } from "@/sanity/sanity-utils";
import { Metadata } from "next";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/shared/RichTextComponent";
import Link from "next/link";
import ShareBtn from "@/components/shared/ShareBtn";
import { Separator } from "@/components/ui/separator";

export const revalidate = 30

type Props = {
  params: {slug: string}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
        
        const slug = params.slug    
        const metapost = await getBlogPost(slug)
        console.log(slug)
        if(!metapost) return {
            title: "Not Found",
            description: "The page you are looking for does not exist.",
        }
        return {
            title: metapost.title,
            description: metapost.description,
            alternates: {
                canonical: `/blog/${slug}`
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

export default async function Post({ params }: Props) {
    const slug = params.slug;
    const post = await getBlogPost(slug)

    return (
        <main className="content__main">
            <article>
            <section className="mb-4">
                <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2">
                    <h1 className="text-5xl font-bold row-span-2 uppercase p-6 cursor-pointer tracking-wider md:text-5xl md:col-span-2"> {post.title}</h1>
                    
                    {post.description && (
                        <p className="text-xl pl-6 text-zinc-400 md:text-2xl">{post.description}</p>
                    )}

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
                    <Link href="/blog">
                        <p className='text-lg w-fit rounded-xl cursor-pointer text-center hover:text-blue-500 md:text-2xl'>
                            Other Posts
                        </p>
                    </Link>
                </div>
                <ShareBtn url={`https://cabennetts.dev/blog/${slug}`}/>
            </div>

        </article>
        </main>
    )
}