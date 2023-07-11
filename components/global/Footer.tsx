import React from 'react'
import { Button } from "../ui/button"
import Link from 'next/link'

type Props = {}

export function Footer(props: Props) {

    return (
        <footer className="flex flex-col">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 sm:gap-2 p-6">
                <div className="sticky flex flex-col justify-center items-center sm:flex-row">
                    <ul className="flex flex-row gap-2 items-center">
                        <li>
                            <Button asChild variant="link" className='text-white'>
                                <Link href="/projects">Projects</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant="link" className='text-white'>
                                <Link href="/blog">Blog</Link>
                            </Button>
                        </li>
                        <li>
                            <Button asChild variant="link" className='text-white'>
                                <Link href="/other">Other</Link>
                            </Button>  
                        </li>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}

