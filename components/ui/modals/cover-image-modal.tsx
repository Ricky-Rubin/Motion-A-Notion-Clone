"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

import { useCoverImage } from "@/hooks/use-cover-image";
import { SingleImageDropzone } from "@/components/upload/single-image";

export const CoverImageModal= () => {

    const update = useMutation(api.documents.update);
    const params = useParams();

    const [file, setFile] = useState<File>();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const coverImage = useCoverImage();
    const { edgestore } = useEdgeStore();

    const onClose = () =>{
        setFile(undefined);
        setIsSubmitting(false);
        coverImage.onClose();
    }

    const onChange = async (file?: File) => {
        if (file) {
            setIsSubmitting(true);
            setFile(file);

                const res = await edgestore.publicFiles.
                upload({
                    file,
                    options: {
                        replaceTargetUrl: coverImage.url,
                    }
                });

            await update({
                id: params.documentId as Id<"documents">,
                coverImage: res.url
            });

            onClose();
        }
    }

    return (
        <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center text-lg fomt-semibold">
                        Cover Image
                    </DialogTitle>
                </DialogHeader>

                <SingleImageDropzone 
                    className="w-full outline-none"
                    disabled={isSubmitting}
                    value={file}
                    onChange={onChange}
                />
            </DialogContent>
        </Dialog>
    )
}