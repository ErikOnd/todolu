import { Icon } from "@atoms/Icons/Icon";
import { Text } from "@atoms/Text/Text";
import { TaskItem } from "@components/TaskItem/TaskItem";
import styles from "./RememberContent.module.scss";

type RememberContentProps = {};

export function RememberContent(props: RememberContentProps) {
	const {} = props;

	return (
		<div className={styles["remember-content"]}>
			<div className={styles["header"]}>
				<div className={styles["icon-holder"]}>
					<Icon size={32} name="star" />
				</div>
				<Text size="lg">
					Memory offload station: now boarding
				</Text>
				<Text className={styles["header-info-text"]}>Your essential tasks, always visible</Text>
			</div>

			<TaskItem taskName="Pay electric bill" />
		</div>
	);
}
