import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 font-sans">
      <div>
        <div className='flex items-center gap-12'>
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
          Hello, I am
        </p>
      </div>
    </div>
  );
}
