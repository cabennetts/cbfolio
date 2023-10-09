import Link from "next/link";
import { getPostByName, getPostsMeta } from "@/lib/posts";
import { notFound } from 'next/navigation';
import getFormattedDate from "@/lib/getFormattedDate";
import { Separator } from "@/components/ui/separator";
import ShareBtn from "@/components/shared/ShareBtn";

export const revalidate = 86400
// export const revalidate = 0

type Props = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta() // deduped!
    
    if (!posts) return []

    return posts.map((post) => ({
        slug: post.id
    }))
}

export async function generateMetadata({ params: { slug } }: Props) {
    const post = await getPostByName(`${slug}.mdx`) // deduped!

    if(!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.meta.title
    }
}

export default async function Post({ params: { slug } }: Props) {
    const post = await getPostByName(`${slug}.mdx`) // deduped!

    if (!post) notFound()

    const { meta, content } = post
    console.log(content)
    const pubDate = getFormattedDate(meta.date)

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>#{tag}</Link>
    ))

    return (
        <>
            <main className="content__main">
                <section className="mb-4">
                    <h1 className="text-5xl font-bold row-span-2 p-6 cursor-pointer tracking-wider md:text-5xl md:col-span-2 md:p-0"> {meta.title} </h1>
                    <p className="p-4 text-sm">📅 {pubDate} </p>
                </section>
                
                <Separator color="bg-white" className="my-6"/>

                <article className="prose prose-gray prose-invert lg:prose-xl">
                {content}
                </article>
                
                <Separator color="bg-white" className="my-6"/>

                <section className="p-6 bg-[#111111] rounded-xl">
                    <h3 className="text-2xl ">Related:</h3>
                    <div className="flex flex-row gap-4">
                        {tags}
                    </div>
                </section>
                <section className='flex ml-6 mt-6 flex-col md:flex-row'>
                    <div className='md:pr-6 flex items-center'>
                        <Link href="/blog">
                            <p className='text-lg w-fit rounded-xl cursor-pointer text-center hover:text-blue-500 md:text-2xl'>
                                Other Posts
                            </p>
                        </Link>
                    </div>
                    <ShareBtn url={`https://cabennetts.com/blog/${slug}`}/>
                </section>

            </main>
        </>
    )
}