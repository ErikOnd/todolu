import { Headline } from "@atoms/Headline/Headline";
import { Text } from "@atoms/Text/Text";
import styles from "./Sidebar.module.scss";

export function Sidebar() {
	return (
		<div className={styles["sidebar"]}>
			<Headline as="h1">Test</Headline>
			<Text as="p">This is a medium paragraph</Text>
		</div>
	);
}
