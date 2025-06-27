import styles from "./Sidebar.module.scss";
import Image from "next/image";
import {Text} from "@atoms/Text/Text";
import profilePlaceholder from "@assets/images/profile-image-placeholder.jpg";
import WeeklySlider from "@components/WeeklySlider/WeeklySlider";


type SidebarProps = {
	baseDate: Date;
	setBaseDate: (date: Date) => void;
	rangeLabel: string;
}

export function Sidebar(props: SidebarProps) {
	const {baseDate, setBaseDate, rangeLabel} = props;
	return (
		<div className={styles["sidebar"]}>
			<div className={styles["profile-section"]}>
				<button className={styles["profile-button"]}
				>
					<Image alt="profile image" src={profilePlaceholder} className={styles["profile-image"]}/>
				</button>
				<div className={styles["profile-info"]}>
					<Text className={styles["username"]}>John Doe</Text>
					<Text size="sm" className={styles["email"]}>john.doe@example.com</Text>
				</div>
			</div>
			<div className={styles["week-slider-section"]}>
				<WeeklySlider baseDate={baseDate} rangeLabel={rangeLabel} setBaseDate={setBaseDate}/>
				<div className={styles["current-week-indicator"]}
				><Text> Current Week</Text>
				</div>
			</div>
			<div className={styles["remember-section"]}
			>
				<Text className={styles["remember-header"]}>
					To Remember
				</Text>
				<div className={styles["remember-items"]}
				>
	checkboxes
				</div>
				<button className={styles["test-button"]}>
					<Text>Add new Item</Text>
				</button>
			</div>
		</div>
	);
}
