import { DailyTextarea } from "@atoms/Textarea/DailyTextarea";
import { getCurrentWeek } from "@utils/getCurrentWeek";
import styles from "./DesktopContent.module.scss";

type DesktopContentProps = {
	baseDate: Date;
};

export function DesktopContent(props: DesktopContentProps) {
	const { baseDate } = props;
	const { days } = getCurrentWeek(baseDate);

	return (
		<div className={styles["desktop-content"]}>
			{days.map((day, index) => (
				<div key={index} className={styles["textarea-wrapper"]}>
					<DailyTextarea textareaDate={day.fullDate} />
				</div>
			))}
		</div>
	);
}
