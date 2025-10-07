import styles from "./SmartEditor.module.scss";
import {en} from "@blocknote/core/locales";
import {BlockNoteView} from "@blocknote/mantine";
import {useCreateBlockNote} from "@blocknote/react";
import React from "react";
import "@blocknote/mantine/style.css";

export function SmartEditor() {
	const locale = en;

	const editor = useCreateBlockNote({
		dictionary: {
			...locale,
			placeholders: {
				...locale.placeholders,
				emptyDocument: "Start typing..",
			}
		}
	});

	return <BlockNoteView editor={editor} className={styles["smart-editor"]} theme="light"/>;
}
