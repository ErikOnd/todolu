"use client";

import { DailyTextarea } from "@atoms/Textarea/DailyTextarea";

type WeeklyContentProps = {
	selectedDate: Date;
};

export function WeeklyContent(props: WeeklyContentProps) {
	const { selectedDate } = props;
	console.log(selectedDate);

	return <DailyTextarea textareaDate={selectedDate} />;
}
