import React from 'react'
import { Button } from "../ui/button"
import Link from 'next/link'
import { FaUnsplash, FaLinkedin, FaGithub } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'

type Props = {}

export function Footer(props: Props) {

    return (
        <footer className="bg-theme-background flex flex-col gap-6 border-t-2 p-6 border-theme-primary">
                <div className="sticky flex flex-col justify-center items-center sm:flex-row">
                    <ul className="flex flex-row gap-2 text-xl items-center font-switzer font-medium uppercase">
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
                    <ul className='flex flex-row gap-2 items-center text-white text-4xl'>
                        <li>
                            <Link href='https://www.github.com/cabennetts'><FaGithub width={40} height={40} /></Link>
                        </li>
                        <li>
                            <Link href='https://www.linkedin.com/in/cabennetts'><FaLinkedin width={40} height={40} /></Link>
                        </li>
                        <li>
                            <Link href='https://unsplash.com/@cabennetts'><FaUnsplash width={40} height={40}/></Link>
                        </li>
                        <li>
                            <Link href='mailto:cabennetts@outlook.com'><AiFillMail width={40} height={40}/></Link>
                        </li>
                    </ul>
                </div>
                <div className="sticky flex flex-col justify-center items-center text-center gap-2 font-switzer text-theme-text font-bold">
                    <p>Caleb Bennetts | cabennetts</p>
                    <p>© 2021-Present Caleb Bennetts. All Rights Reserved.</p>
                </div>
        </footer>
    )
}

