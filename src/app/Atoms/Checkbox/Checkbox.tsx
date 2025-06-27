import styles from "./Checkbox.module.scss";
import {Text} from "@atoms/Text/Text";

type CheckboxProps = {
	label: string;
};

export default function Checkbox({ label }: CheckboxProps) {
	return (
		<label className={styles["checkbox"]}>
			<input type="checkbox" />
			<span className={styles["checkmark"]}></span>
			<Text className={styles["label"]}>{label}</Text>
		</label>
	);
}