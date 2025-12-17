"use client";

import { api } from "@/convex/_generated/api";
import { useQuery, useMutation } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";

import { Toolbar } from "@/components/toolbar";
import { use, useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";

import dynamic from "next/dynamic";
import { useMemo } from "react";

interface DocumentIdPageProps {
    params: Promise<{
        documentId: Id<"documents">;
    }>;
};

const DocumentIdPage = ({
    params
}: DocumentIdPageProps) => {

    const Editor = useMemo(() => dynamic(() => import("@/components/editor"),
    { ssr: false }), [])

    const { documentId } = use(params);
    const router = useRouter();

    const document = useQuery(api.documents.getById, {
        documentId: documentId
    });

    const update = useMutation(api.documents.update);

    const debounceTimeRef = useRef<NodeJS.Timeout | null>(null);

    const onChange = useCallback((content: string) => {
        if (debounceTimeRef.current) {
            clearTimeout(debounceTimeRef.current)
        }

        debounceTimeRef.current = setTimeout(() => {
            update({
                id: documentId,
                content
            });
        }, 500)
    }, [documentId, update]);

    useEffect(() => {
        if (document === null) {
            router.push("/documents");
        }
    }, [document, router]);

    if (document === undefined) {
        return (
            <div>
                <Cover.Skeleton />
                <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
                    <div className="space-y-4 pl-8 pt-4">
                        <Skeleton className="h-14 w-[50%]" />
                        <Skeleton className="h-4 w-[80%]" />
                        <Skeleton className="h-4 w-[40%]" />
                        <Skeleton className="h-4 w-[60%]" />
                    </div>
                </div>
            </div>
        );
    };

    if (document === null) {
        // throw new Error("Document not found");
        return null;
    }

    return (
        <div className="pb-40">
            <Cover
                preview
                url={document.coverImage}
            />

            <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
                <Toolbar preview initialData={document} />

                <Editor
                    editable={false}
                    onChange={onChange}
                    initialContent={document.content}
                />
            </div>
        </div>
    );
};

export default DocumentIdPage;