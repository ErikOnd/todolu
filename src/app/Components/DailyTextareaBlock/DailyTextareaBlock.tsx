import dynamic from "next/dynamic";
const SmartEditor = dynamic(() => import("@atoms/SmartEditor/SmartEditor"), {
	ssr: false,
});

import { Text } from "@atoms/Text/Text";
import { formatToDayLabel } from "@utils/formatToDayLabel";
import styles from "./DailyTextareaBlock.module.scss";

type DailyTextareaProps = {
	textareaDate: Date;
	autoFocus?: boolean;
};

export function DailyTextareaBlock(props: DailyTextareaProps) {
	const { textareaDate } = props;
	const { weekday, date } = formatToDayLabel(textareaDate);
	return (
		<div className={styles["daily-textarea-block"]}>
			<div className={styles["date"]}>
				<Text className={styles["day-batch"]}>{weekday}</Text>
				<Text className={styles["month-and-day"]}>{date}</Text>
			</div>
			<SmartEditor />
		</div>
	);
}
