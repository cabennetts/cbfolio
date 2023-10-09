import React from 'react'
import { Separator } from '../ui/separator'

type Props = {
    title: string
}

function PageTitle({title}: Props) {
    return (
        <>
            <h1 className='text-5xl font-extrabold tracking-widest py-8'>{title}</h1>
            <Separator  className="mb-6 bg-theme-primary"/>
        </>
    )
}

export default PageTitle