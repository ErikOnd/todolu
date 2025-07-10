import styles from "./InputField.module.scss";
import {v4 as uuidv4} from "uuid";
import {useState} from "react";

export function InputField() {
	const [text, setText] = useState("");
	const uniqueId = `task-${uuidv4()}`;

	return (
		<input
			className={styles["input-field"]}
			type="text"
			value={text}
			onChange={(e) => setText(e.target.value)}
			placeholder="Add a new task"
			name={uniqueId}
			id={uniqueId}
		/>
	);
}
