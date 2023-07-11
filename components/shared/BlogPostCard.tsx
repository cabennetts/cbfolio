import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string            
    slug: string
    description: string
    image: string
    alt: string
}

const BlogPostCard = ({ title, slug, description, image, alt }: Props) => {

    return (
        <div className="">

            <div>
                <Image 
                    src={image}
                    width={350}
                    height={250}
                    alt={alt}
                />
            </div>

            <div>
                <Link href={`/blog/${slug}`}>
                    <h1>{title}</h1>                    
                </Link>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default BlogPostCard;