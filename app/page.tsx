import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className='w-2/3 [&_a]:text-white [&_a]:underline [&_a:hover]:text-amber-400'>
        <div className='flex justify-center items-center gap-12'>
          <div>
            <Image
              src="/images/headshot.jpg"
              alt="Image of headshot"
              className='aspect-square overflow-hidden object-cover rounded-full'
              width={230}
              height={300}
            />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">
              Austin Johnson
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer
            </p>
          </div>
        </div>
        <h3 className="text-3xl font-bold mb-4">
          About
        </h3>
        <p>
          Welcome to my portfolio! I am currently a senior ungraduate at the University of 
          Louisville's J.B. Speed School of Engineering studying Computer Science. My professional 
          work in the field includes training AI agents through <Link href="https://outlier.ai/about-us" target='_blank'>Outlier</Link>.
          Some of my hobbies include working on programming projects, watching sports, hanging out with friends, or playing video games. 
          If you are interested in some of my work, you can view my highlighted projects <Link href="#" target='_self'>here</Link>, or you can checkout
          my <Link href="https://github.com/austinjohnson03" target='_blank'>GitHub</Link> for a full list of all the projects I've worked on. I enjoy 
          all aspects of computing whether it be low level systems work, data science, creating web applications, etc. I hope you enjoy looking through 
          my work and thank you for stopping by!
        </p>
      </div>
    </div>
  );
}
