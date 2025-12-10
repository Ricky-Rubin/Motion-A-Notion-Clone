"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCreateBlockNote, useEditorChange } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/core/style.css";
import "@blocknote/react/style.css"
import "@blocknote/mantine/style.css"

import { useTheme } from "next-themes";

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
};

export const Editor = ({
    onChange,
    initialContent,
    editable
}: EditorProps) => {

    const { resolvedTheme } = useTheme();

    const editor: BlockNoteEditor = useCreateBlockNote({
        editable,
        initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
    })

    useEditorChange((editor) => {
            const content = JSON.stringify(editor.document, null, 2);
            onChange(content);
    }, editor);

    return (
        <div>
            <BlockNoteView
                editor={editor}
                theme={resolvedTheme === "dark" ? "dark" : "light"}
            />
        </div>
    )
}

