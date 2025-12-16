"use client";

// kepping this for potential future use
// Currently using not-found.tsx instead

// const Error = () => {
//     return null;
// }

// export default Error;

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ErrorProps {
    error: Error;
    reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/error.svg"
                height="300"
                width="300"
                alt="Error"
                className="dark:hidden"
            />

            <Image
                src="/error-dark.svg"
                height="300"
                width="300"
                alt="Error"
                className="hidden dark:block"
            />

            <h2 className="text-xl font-medium">
                Something went wrong!
            </h2>

            <Button asChild>
                <Link href="/documents">
                    Go back
                </Link>
            </Button>
        </div>
    );
}

export default Error;