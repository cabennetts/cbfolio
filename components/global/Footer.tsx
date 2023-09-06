import React from 'react'
import { Button } from "../ui/button"
import Link from 'next/link'
import { FaUnsplash, FaLinkedin, FaGithub } from 'react-icons/fa'


type Props = {}

export function Footer(props: Props) {

    return (
        <footer className=" bg-black text white flex flex-col border-t-2 pt-6">
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
                <div className='sticky flex flex-col justify-center items-center sm:flex-row'>
                    <ul className='flex flex-row gap-2 items-center text-white text-2xl'>
                        <li>
                            <Link href='https://www.github.com/cabennetts'><FaGithub width={40} height={40} /></Link>
                        </li>
                        <li>
                            <Link href='https://www.linkedin.com/in/cabennetts'><FaLinkedin width={40} height={40} /></Link>
                        </li>
                        <li>
                            <Link href='https://unsplash.com/@cabennetts'><FaUnsplash width={40} height={40}/></Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}

