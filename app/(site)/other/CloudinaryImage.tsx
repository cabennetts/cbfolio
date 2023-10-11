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


// export default function CloudinaryImage(props: any & SearchResults) {

//     const { imageData } = props

//     const isFavorited = imageData.tags.includes('favorite')
//     return (
//             <CldImage 
//                 {...props} 
//                 src={imageData.public_id} 
//             />
//     )
// }