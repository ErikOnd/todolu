import { AddTaskModal } from "@components/AddTaskModal/AddTaskModal";
import { TaskItem } from "@components/TaskItem/TaskItem";
import styles from "./RememberContent.module.scss";
import {useState} from "react";

type RememberContentProps = {
	rememberItems?: string[];
};

export function RememberContent(props: RememberContentProps) {
	const {} = props;

	const [modalOpen, setModalOpen] = useState(false);
	const [editTask, setEditTask] = useState<string | undefined>(undefined);

	const handleEdit = (taskName: string) => {
		setEditTask(taskName);
		setModalOpen(true);
	};

	return (
		<div className={styles["remember-content"]}>
			<div className={styles["task-items"]}>
				<TaskItem taskName="Pay electric bill" onEdit={handleEdit}/>
				<TaskItem taskName="Call mom for birthday wishes Call mom for birthday wishes Call mom for birthday wishes Call mom for birthday wishes Call mom for birthday wishes " onEdit={handleEdit}/>
				<TaskItem taskName="Submit project proposal" onEdit={handleEdit}/>
				<TaskItem taskName="Book dental appointment" onEdit={handleEdit}/>
				<TaskItem taskName="Weekly team meeting" onEdit={handleEdit}/>
				<TaskItem taskName="Review contract documents" onEdit={handleEdit}/>
			</div>
			<AddTaskModal open={modalOpen} setOpen={setModalOpen} defaultValue={editTask} />
		</div>
	);
}
