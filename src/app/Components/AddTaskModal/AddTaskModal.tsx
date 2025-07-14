import {Icon} from "@atoms/Icons/Icon";
import {InputField} from "@atoms/InputField/InputField";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "./AddTaskModal.module.scss";
import {Text} from "@atoms/Text/Text";
import {Button} from "@atoms/Button/Button";
import {FormEvent, useState} from "react";


type AddTaskModalProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	defaultValue?: string;
};


export function AddTaskModal(props: AddTaskModalProps) {
	const {open, setOpen, defaultValue} = props;
	const [inputValue, setInputValue] = useState(defaultValue);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setOpen(false);
		setInputValue("");
	};

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<button className={styles["add-task-button"]}>
					<Icon name="plus"/>
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={styles["overlay"]}/>
				<Dialog.Content className={styles["content"]}>
					<Dialog.Title className={styles["title"]}><Text>Add New Task</Text></Dialog.Title>
					<form onSubmit={handleSubmit}>
						<fieldset className={styles["fieldset"]}>
							<InputField value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
						</fieldset>

						<div className={styles["button-group"]}>
							<Button type="submit" variant="primary" fontWeight={700}>
								Save Task
							</Button>

							<Dialog.Close asChild>
								<Button variant="secondary" aria-label="Close" fontWeight={700}>
									Close
								</Button>
							</Dialog.Close>
						</div>
					</form>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
