import { getPostsMeta } from "@/lib/posts"
import ListItem from "@/components/blog/ListItem"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

// export const revalidate = 86400
export const revalidate = 0

type Props = {
    params: {
        tag: string
    }
}

// export async function generateStaticParams() {
//     const posts = await getPostsMeta() //deduped!

//     if (!posts) return []

//     const tags = new Set(posts.map(post => post.tags).flat())

//     return Array.from(tags).map((tag) => ({ tag }))
// }

export function generateMetadata({ params: { tag } }: Props) {

    return {
        title: `Posts about ${tag}`
    }
}

export default async function TagPostList({ params: { tag } }: Props) {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return <p className="mt-10 text-center">Sorry, no posts available.</p>

    const tagPosts = posts.filter(post => post.tags.includes(tag))

    if (!tagPosts.length) {
        return (
            <div className="text-center">
                <p className="mt-10">Sorry, no posts for that keyword.</p>
                <Link href="/">Back to Home</Link>
            </div>
        )
    }

    return (
        <main className="content__main">
            <h2 className="text-3xl font-extrabold mt-4 mb-0">Results for: #{tag}</h2>
            
            <Separator color="bg-white" className="my-4"/>
            <section className="mt-6 max-w-2xl">
                <ul className="w-full list-none p-0">
                    {tagPosts.map(post => (
                        <ListItem key={post.id} post={post} />
                    ))}
                </ul>
            </section>
        </main>
    )
}