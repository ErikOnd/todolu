import * as Dialog from "@radix-ui/react-dialog";
import styles from "./AddTaskModal.module.scss";
import {InputField} from "@atoms/InputField/InputField";
import {Icon} from "@atoms/Icons/Icon";

export function AddTaskModal() {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button className={styles["add-task-button"]}>
					<Icon name="plus" size={24}/>
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={styles["overlay"]}/>
				<Dialog.Content className={styles["content"]}>
					<Dialog.Title className={styles["title"]}>Add New Task</Dialog.Title>
					<fieldset className={styles["fieldset"]}>
						<InputField/>
					</fieldset>
					<Dialog.Close asChild>
						<button>Save Task</button>
					</Dialog.Close>

					<Dialog.Close asChild>
						<button aria-label="Close">
							close button
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
