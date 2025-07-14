import Checkbox from "@atoms/Checkbox/Checkbox";
import { Icon } from "@atoms/Icons/Icon";
import styles from "./TaskItem.module.scss";

type TaskItemProps = {
	taskName: string;
	onEdit?: (taskName: string) => void;
};

export function TaskItem(props: TaskItemProps) {
	const { taskName, onEdit } = props;
	return (
		<div className={styles["task-item"]}>
			<Checkbox label={taskName} />
			<button className={styles["edit-button"]} onClick={() => onEdit?.(taskName)}>
				<Icon name="pencil" size={24} />
			</button>
		</div>
	);
}
