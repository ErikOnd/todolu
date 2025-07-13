"use client";
import { DailyTextareaBlock } from "@components/DailyTextareaBlock/DailyTextareaBlock";
import styles from "./WeeklyContent.module.scss";

type WeeklyContentProps = {
	selectedDate: Date;
};

export function WeeklyContent(props: WeeklyContentProps) {
	const { selectedDate } = props;

	return (
		<div className={styles["weekly-content"]}>
			<DailyTextareaBlock textareaDate={selectedDate} autoFocus={true} />
		</div>
	);
}
