import styles from "./Sidebar.module.scss";
import {Headline} from "@/assets/app/Atoms/Headline/Headline";
import {Text} from "@/assets/app/Atoms/Text/Text";

export function Sidebar() {
	return (
		<div className={styles["sidebar"]}>
			<Headline as="h1">Test</Headline>
			<Text size="m">This is a medium paragraph</Text>
		</div>
	);
}
