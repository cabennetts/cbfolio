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
            <Separator className="bg-theme-secondary"/>
            <p className="font-switzer font-light text-lg text-text">{date}</p>
            <Link className="font-ranade text-3xl font-bold text-theme-primary" href={`/blog/${id}`}>{title}</Link>
            <p className="font-supreme font-light text-text-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aliquid autem nihil excepturi adipisci voluptas nobis odio commodi, enim impedit, illum officiis deleniti omnis est? Numquam ipsum inventore non earum.</p>
        </li>
    )
}