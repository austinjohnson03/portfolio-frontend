import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className='flex'>
        <div>
          <Image
            src="/images/headshot.jpg"
            alt="Image of headshot"
            width={230}
            height={300}
          />
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Austin Johnson
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer
          </p>
          <h3 className="text-3xl font-bold mb-4">
            Bio
          </h3>
          <p>
            Welcome to my portfolio!
            <br></br>
            Hello
          </p>
        </div>
      </div>
    </div>
  );
}
