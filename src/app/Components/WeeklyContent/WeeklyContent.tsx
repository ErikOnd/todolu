"use client";

import { useState } from "react";
import styles from "./WeeklyContent.module.scss";

export function WeeklyContent() {
	const [text, setText] = useState("");
	const today = new Date().toLocaleDateString("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric",
	});

	return (
		<div className={styles["weekly-content"]}>
			<div className={styles["date"]}>{today}</div>
			<textarea
				className={styles["textarea"]}
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Add tasks for Monady..."
			/>
		</div>
	);
}
