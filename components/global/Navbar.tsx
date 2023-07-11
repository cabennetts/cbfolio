'use client'

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Button } from "../ui/button"

type Props = {}

export function Navbar(props: Props) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full absolute z-10">
            <nav className="w-full flex justify-between items-center md:items-center p-4 px-6 py-4 sm:px-16 md:px-24">         
                <div className="flex justify-between w-full">                
                    <div className="md:flex-[0.5] self-center justify-end">
                        <Link href="/" className="cursor-pointer">
                            <Image
                                src="/cb.png"
                                alt="logo"
                                width={64}
                                height={64}
                            />
                        </Link>
                    </div>
                    
                    <div className="hidden md:flex justify-end">
                        <ul className="flex flex-row gap-2 items-center ">
                            <li>
                                <Button asChild variant="link" className="text-white text-2xl">
                                    <Link href="/projects">Projects</Link>
                                </Button>
                            </li>
                            <li>
                                <Button asChild variant="link" className="text-white text-2xl">
                                    <Link href="/blog">Blog</Link>
                                </Button>
                            </li>
                            <li>
                                <Button asChild variant="link" className="text-white text-2xl">
                                    <Link href="/other">Other</Link>
                                </Button>  
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex relative">
                    {!menuOpen && (
                        <FaBars fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setMenuOpen(true)} />
                    )}
                    
                    {menuOpen && (
                        <div
                        className="z-10 fixed -top-0 -right-0 p-4 w-full h-screen md:hidden list-none
                        flex flex-col justify-start items-end rounded-md bg-black text-white animate-slide-in"
                        >
                                
                            <div className="text-5xl py-2 px-4">
                                <AiOutlineClose onClick={() => setMenuOpen(false)} className="m-0"/>
                            </div>
                            <ul className="text-end">
                                <li>
                                    <Button asChild variant="ghost"  className="text-5xl py-10" 
                                            onClick={() => setMenuOpen(false)}>
                                        <Link href="/projects">Projects</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button asChild variant="ghost"  className="text-5xl py-10" 
                                            onClick={() => setMenuOpen(false)}>
                                        <Link href="/blog">Blog</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button asChild variant="ghost"  className="text-5xl py-10" 
                                            onClick={() => setMenuOpen(false)}>
                                        <Link href="/other">Other</Link>
                                    </Button>  
                                </li>                                               
                            </ul>
                        
                        </div>
                    )}
                </div>
                    
            </nav>
        </header>
    )
}