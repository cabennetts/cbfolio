"use client"

import React from "react";
import { FaLink } from "react-icons/fa"
import Link from "next/link"
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

type Props = {
    url: string
}

const Share = ({url}: Props) => {
    const [copied, setCopied] = React.useState(false);
    const onCopy = React.useCallback(() => {
        setCopied(true);
        toast.success("Link copied to clipboard")
    }, [])

    return (
        <div className="w-fit text-lg md:text-2xl">
            <CopyToClipboard onCopy={onCopy} text={url}>
                <button className="underline cursor-pointer flex flex-row justify-center items-center text-start">
                    <FaLink height={32} width={32} /> 
                    <p className="p-2">Share</p>
                </button>               
            </CopyToClipboard>
            <Toaster />
        </div>
    )
}

export default Share


