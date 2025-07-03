import Checkbox from "@atoms/Checkbox/Checkbox";
import { Icon } from "@atoms/Icons/Icon";
import styles from "./TaskItem.module.scss";

type TaskItemProps = {
	taskName: string;
};

export function TaskItem(props: TaskItemProps) {
	const { taskName } = props;
	return (
		<div className={styles["task-item"]}>
			<Checkbox label={taskName} />
			<button className={styles["edit-button"]}>
				<Icon name="pencil" size={24} />
			</button>
		</div>
	);
}
