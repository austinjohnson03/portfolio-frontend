'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
export default function ResumeViewer() {
    const [numPages, setNumPages] = useState<number>(0);

    return (
        <div className='flex flex-col items-center gap-4'>

            <div className='border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow-lg'>
                <Document
                    file="/docs/resume.pdf"
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                >
                    {Array.from({ length: numPages }, (_, i) => (
                        <Page
                            key={i + 1}
                            pageNumber={i + 1}
                            width={700}
                        />
                    ))}
                </Document>
            </div>
        </div>
    );
}