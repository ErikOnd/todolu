import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./SmartTextarea.module.scss";

type SmartTextareaProps = {
	textareaDate: Date;
};

export function SmartTextarea(props: SmartTextareaProps) {
	const { textareaDate } = props;
	const [text, setText] = useState("");
	const weekdayLong = textareaDate.toLocaleDateString("en-US", { weekday: "long" });
	const uniqueId = `task-${uuidv4()}`;
	return (
		<textarea
			className={styles["smart-textarea"]}
			value={text}
			onChange={(e) => setText(e.target.value)}
			placeholder={`Add tasks for ${weekdayLong} ...`}
			name={uniqueId}
			id={uniqueId}
		/>
	);
}
