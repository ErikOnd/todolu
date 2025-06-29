import { Text } from "@atoms/Text/Text";
import styles from "./TaskItem.module.scss";

type TaskItemProps = {
	taskName: string;
};

export function TaskItem(props: TaskItemProps) {
	const { taskName } = props;
	return (
		<div className={styles["task-item"]}>
			<Text>{taskName}</Text>
		</div>
	);
}
