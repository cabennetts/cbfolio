import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="content__main">
      <section className='flex flex-col-reverse md:flex-row md:justify-between mb-12'>
        <div>
          <h1 className='text-7xl tracking-wider p-4'> Caleb Bennetts</h1>
          <h3 className='text-5xl font-bold tracking-wide p-4'>Software Engineer</h3>

          <p className='text-3xl p-4'>
            You can view my resume 
            <Link href={'./Caleb_Bennetts_Resume.pdf'} className="font-bold text-blue-500">
                <strong className='pl-1 font-bold text-4xl'>here</strong>
              </Link>
          </p>
        </div>
        <div className='p-4'>
          <Image src='/profile_picture.jpg'
            className=""
            height={256}
            width={256}
            alt={'Headshot of Caleb Bennetts'}
          />
        </div>
      </section>

      <section className='flex flex-col md:flex-row'>
        <div className='p-4'>
          <h1 className='text-4xl font-bold tracking-wider p-2'> Proficient </h1>
          <ul className='text-xl ml-4 space-y-2'>
              <li>React</li>
              <li>Typescript</li>
              <li>Tailwind</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Next.js</li>
              <li>C++</li>
              <li>HTML/CSS</li>
              <li>Machine Learning</li>
              <li>MySQL</li>
              <li>postgres</li>
          </ul>
        </div>

        <div className='p-4'>
          <h1 className='text-4xl font-bold tracking-wider p-2'> Familiar </h1>
          <ul className='text-xl ml-4 space-y-2'>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Haskell</li>
              <li>postgres</li>
              <li>Firebase</li>
              <li>GCP</li>
          </ul>
        </div>
      </section>

    </main>
  )
}
