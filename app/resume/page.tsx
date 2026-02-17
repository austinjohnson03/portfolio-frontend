'use client';

import dynamic from 'next/dynamic';

const ResumeViewer = dynamic(() => import('@/components/ResumeViewer'), {
  ssr: false,
  loading: () => <p className="text-zinc-500">Loading resume...</p>
});

export default function Resume() {
    return (
        <div className="flex flex-col items-center py-16 px-6">
            <h1 className="text-4xl font-bold mb-8 text-zinc-800 dark:text-white">
                Resume
            </h1>
            <ResumeViewer/>
        </div>
    )
}