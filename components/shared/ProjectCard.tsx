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

const ProjectCard = ({ title, slug, description, image, alt }: Props) => {

    return (
        <div className="bg-gray-500 bg-opacity-25 m-8 p-4 grid grid-cols-1 grid-rows-2 min-h-[300px] max-h-[400px] max-w-[800px] items-center border-l-2 md:grid-cols-2 md:grid-rows-1">
            
            <div className="content-center">
                <Link href={`/projects/${slug}`} className=" hover:text-blue-500">
                    <h1 className="text-2xl font-bold uppercase p-6 cursor-pointer tracking-wider md:text-3xl">{title}</h1>                    
                </Link>
                {description && (
                    <p className="text-lg pl-6 pb-6 text-zinc-400 md:text-xl">{description}</p>
                )}

                {/* INSERT DATE HERE */}
            </div>

            {image && (
                <div className="object-contain p-6 md:p-0">
                    <Image 
                        src={image}
                        width={400}
                        height={400}
                        alt={alt}
                        
                    />
                </div>
            )}

            {!image && (
                <div className="text-center">
                    <p>No Image to display</p>
                </div>
            )} 

        </div>
    )
}

export default ProjectCard;