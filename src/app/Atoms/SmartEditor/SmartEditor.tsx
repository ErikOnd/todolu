import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import React from "react";
import "@blocknote/mantine/style.css";

export function SmartEditor() {
	// Create a new editor instance
	const editor = useCreateBlockNote();

	// Render the editor
	return <BlockNoteView editor={editor} />;
}
