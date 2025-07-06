"use client";
import { DailyTextarea } from "@atoms/Textarea/DailyTextarea";
import styles from "./WeeklyContent.module.scss";

type WeeklyContentProps = {
	selectedDate: Date;
};

export function WeeklyContent(props: WeeklyContentProps) {
	const { selectedDate } = props;

	return (
		<div className={styles["weekly-content"]}>
			<DailyTextarea textareaDate={selectedDate} />
		</div>
	);
}
