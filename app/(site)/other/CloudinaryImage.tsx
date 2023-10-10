"use client";

import { CldImage } from "next-cloudinary"


export default function CloudinaryImage({publicId}: {publicId: string}) {
    return (
        <CldImage
            width="400"
            height="300"
            src={publicId}
            alt="Description of my image"
        />
    )
}