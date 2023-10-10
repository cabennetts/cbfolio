'use client'

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

type Props = {}

export function Navbar(props: Props) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full absolute z-10">
            <nav className="w-full flex justify-between items-center md:items-center p-4 px-6 py-4 sm:px-16 md:px-24">         
                <div className="flex flex-row justify-between w-screen">                
                    <div className="self-center justify-end">
                        <Link href="/" className="cursor-pointer">
                            <h1 className='font-supreme font-normal m-2 p-2 text-3xl outline outline-1 outline-theme-primary text-theme-text md:text-4xl'>CABENNETTS</h1>
                        </Link>
                    </div>
                        <Separator className="bg-theme-primary w-fit"/>
                    <div className="hidden md:flex justify-end font-switzer font-medium uppercase">
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