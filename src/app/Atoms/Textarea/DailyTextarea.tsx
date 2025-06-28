import { Text } from "@atoms/Text/Text";
import { formatToDayLabel } from "@utils/formatToDayLabel";
import { useState } from "react";
import styles from "./DailyTextarea.module.scss";

type DailyTextareaProps = {
	textareaDate: Date;
};

export function DailyTextarea(props: DailyTextareaProps) {
	const { textareaDate } = props;

	const [text, setText] = useState("");
	const { weekday, date } = formatToDayLabel(textareaDate);
	const weekdayLong = textareaDate.toLocaleDateString("en-US", { weekday: "long" });
	return (
		<div className={styles["daily-textarea"]}>
			<div className={styles["date"]}>
				<Text className={styles["day-batch"]}>{weekday}</Text>
				<Text className={styles["month-and-day"]}>{date}</Text>
			</div>
			<textarea
				className={styles["textarea"]}
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder={`Add tasks for ${weekdayLong} ...`}
				name={`tasks-${textareaDate.toISOString().split("T")[0]}`}
				id={`tasks-${textareaDate.toISOString().split("T")[0]}`}
			/>
		</div>
	);
}
