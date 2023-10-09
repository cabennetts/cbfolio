import Image from "next/image"
import Link from "next/link"

export default function Intro() {

    return (
        <section className='flex flex-col-reverse md:flex-row md:justify-between mb-12'>
            <div>
            <h1 className='text-7xl tracking-wider p-4'> Caleb Bennetts</h1>
            <h3 className='text-5xl text-primary font-bold tracking-wide p-4'>Software Engineer</h3>

            <p className='text-3xl p-4'>
                You can view my resume 
                <Link href={'./Caleb_Bennetts_Resume.pdf'} className="font-bold text-secondary">
                    <strong className='pl-1 font-bold text-4xl'>here</strong>
                </Link>
            </p>
            </div>
            <div className='p-8'>
            <Image src='/profile_picture.jpg'
                className=""
                height={512}
                width={512}
                alt={'Headshot of Caleb Bennetts'}
            />
            </div>
        </section>
    )
}