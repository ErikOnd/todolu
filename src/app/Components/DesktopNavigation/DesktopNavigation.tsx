import { Text } from "@atoms/Text/Text";
import styles from "./Navigation.module.scss";

export function DesktopNavigation() {
	return (
		<nav className={styles["desktop-navigation"]}>
			<div className={styles["logo-section"]}>
				<Text size="xl">Desktop</Text>
			</div>
			<div className={styles["navigation-section"]}>
				<Text size="xl">Desktop</Text>
			</div>
		</nav>
	);
}
