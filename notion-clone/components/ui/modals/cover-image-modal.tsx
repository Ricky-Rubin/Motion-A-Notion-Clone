"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

import { useCoverImage } from "@/hooks/use-cover-image";

export const CoverImageModal= () => {
    const coverImage = useCoverImage();

    return (
        <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center text-lg fomt-semibold">
                        Cover Image
                    </DialogTitle>
                </DialogHeader>

                <div>
                    TODO: Upload image
                </div>
            </DialogContent>
        </Dialog>
    )
}