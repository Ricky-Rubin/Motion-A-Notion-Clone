"use client"

import Image from "next/image";

const DocumentsPage = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image 
                src="/empty.svg"
                height="300"
                width="300"
                alt="Empty"
                className="dark:hidden"
            />

            <Image 
                src="/empty-dark.svg"
                height="300"
                width="300"
                alt="Empty-Dark"
                className="hidden dark:block"
            />
        </div>
    );
};

export default DocumentsPage;