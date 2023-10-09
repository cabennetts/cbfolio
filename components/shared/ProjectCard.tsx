import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

type Props = {
    title: string            
    slug: string
    description: string
    image: string
    alt: string
}

const ProjectCard = ({ title, slug, description, image, alt }: Props) => {

    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <Link href={`/projects/${slug}`} className=" hover:text-blue-500">                        
                        <CardTitle>{title}</CardTitle>
                    </Link>
                    {description && (
                        <CardDescription>{description}</CardDescription>
                    )}
                </CardHeader>
                <CardContent>
                    {image && (
                        <div className="object-contain p-6 md:p-0">
                            <Image 
                                src={image}
                                width={300}
                                height={300}
                                alt={alt}
                            />
                        </div>
                    )}

                    {!image && (
                        <div className="text-center">
                            <p>No Image to display</p>
                        </div>
                    )} 
                </CardContent>
            </Card>
        </>
    )
}

export default ProjectCard;

