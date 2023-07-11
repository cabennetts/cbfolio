import Image from "next/image";
import Link from "next/link";

export const RichTextComponents = {
    // types: {
    //     image: ({ value }: any) => {
    //         return (
    //             <div className="">
    //                 <Image
    //                     className="object-contain"
    //                     src={value.url()}
    //                     alt="Blog Post Image"
    //                 />
    //             </div>
    //         )
    //     }
    // },
    list: {
        bullet: ({ children }: any) => {
            return(<ul className="ml-6 py-5 list-disc space-y-5 md:ml-10">{children}</ul>)
        },
        number: ({ children }: any) => {
            return (<ol className="ml-6 list-decimal md:ml-10">{children}</ol>)
        }
    },
    block: {
        h1: ({ children }: any) => {
            return (<h1 className="text-4xl font-bold py-4">{children}</h1>)
        },
        h2: ({ children }: any) => {
            return (<h2 className="text-3xl font-bold py-4">{children}</h2>)
        },
        h3: ({ children }: any) => {
            return (<h3 className="text-2xl font-bold py-4">{children}</h3>)
        },
        h4: ({ children }: any) => {
            return (<h4 className="text-xl font-bold py-4">{children}</h4>)
        },
        h5: ({ children }: any) => {
            return(<h5 className="py-2">{children}</h5>)
        },
        h6: ({ children }: any) => {
            return(<h6 className="py-2">{children}</h6>)
        },
        blockquote: ({ children }: any) => {
            return (<blockquote className="border-l-4 pl-5 py-5 my-5">
                {children}
            </blockquote>)
        },
    },
    marks: {
        link: ({ children, value}: any) => {
            const rel = !value.href.startsWith('/')
                ? "noreferrer noopener"
                : undefined;
            
                return (
                    <Link
                        href={value.href}
                        rel={rel}
                        className="underline decoration-slate-600 hover:decoration-slate-300"
                    >
                        {children}
                    </Link>
                )
        }
    }
}