import styles from "./InputField.module.scss";

type InputFieldProps = {
	value?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	id?: string;
	name?: string;
	placeholder?: string;
};

export function InputField({
	value,
	onChange,
	id,
	name,
	placeholder = "Add a new task",
}: InputFieldProps) {
	return (
		<input
			className={styles["input-field"]}
			type="text"
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			name={name}
			id={id}
		/>
	);
}
