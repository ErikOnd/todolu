"use client";

import styles from "./notionPlanner.module.scss";

export default function NotionStylePlanner() {
	const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
		const content = (e.currentTarget as HTMLElement).innerText;
		console.log("Document content:", content);
	};

	return (
		<div className={styles.wrapper}>
			<div
				className={styles.page}
				onInput={handleInput}
				spellCheck={false}
			>
				{weekdays.map((day) => (
					<div
						key={day}
						className={styles["day-section"]}
					>
						<h2 className={styles["day-headline"]}>{day}</h2>
						<div className={styles["day-content"]} contentEditable={true} suppressContentEditableWarning />
					</div>
				))}
			</div>
		</div>
	);
}
