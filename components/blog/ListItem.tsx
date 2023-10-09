import { Meta } from "@/types";
import Link from "next/link";
import { Separator } from "../ui/separator";

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date, description } = post
    
    return (
        <li className="pb-6">
            <p className="text-lg text-gray-300">{date}</p>
            <Link className="text-3xl font-bold text-theme-primary" href={`/blog/${id}`}>{title}</Link>
            <p>{description}</p>
        </li>
    )
}