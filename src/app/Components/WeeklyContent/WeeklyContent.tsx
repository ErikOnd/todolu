"use client";

import { Text } from "@atoms/Text/Text";
import { formatToDayLabel } from "@utils/formatToDayLabel";
import { useState } from "react";
import styles from "./WeeklyContent.module.scss";

type WeeklyContentProps = {
	selectedDate: Date;
};

export function WeeklyContent(props: WeeklyContentProps) {
	const { selectedDate } = props;
	console.log(selectedDate);

	const [text, setText] = useState("");
	const { weekday, date } = formatToDayLabel(selectedDate);
	const weekdayLong = selectedDate.toLocaleDateString("en-US", { weekday: "long" });

	return (
		<div className={styles["weekly-content"]}>
			<div className={styles["date"]}>
				<Text className={styles["day-batch"]}>{weekday}</Text>
				<Text className={styles["month-and-day"]}>{date}</Text>
			</div>
			<textarea
				className={styles["textarea"]}
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder={`Add tasks for ${weekdayLong} ...`}
			/>
		</div>
	);
}
