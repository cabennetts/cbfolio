import { Meta } from "@/types";
import Link from "next/link";

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    
    return (
        <li className="py-2">
            <Link className="text-3xl font-bold " href={`/blog/${id}`}>{title}</Link>
            <br />
            <p className="text-lg text-gray-300">📅 {date}</p>
        </li>
    )
}