"use client";

import { Icon } from "@atoms/Icons/Icon";
import { Text } from "@atoms/Text/Text";
import { getCurrentWeek } from "@utils/getCurrentWeek";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import styles from "./MobileNavigation.module.scss";

type MobileNavigationProps = {
	content: "weekly" | "remember" | "profile";
	onChange: (value: "weekly" | "remember" | "profile") => void;
};

const navItems: { value: "weekly" | "remember" | "profile"; label: string }[] = [
	{ value: "weekly", label: "Weekly" },
	{ value: "remember", label: "To Remember" },
	{ value: "profile", label: "Profile" },
];

export function MobileNavigation(props: MobileNavigationProps) {
	const { content, onChange } = props;
	const [baseDate, setBaseDate] = useState(new Date());
	const { days, rangeLabel } = getCurrentWeek(baseDate);
	const todayIndex = days.findIndex((day) => day.isToday);
	const [selectedDayIndex, setSelectedDayIndex] = useState(todayIndex);
	const dayRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const dayInMs = 86400000;

	useEffect(() => {
		const el = dayRefs.current[selectedDayIndex];
		if (el) {
			el.scrollIntoView({
				inline: "center",
				behavior: "smooth",
				block: "nearest",
			});
		}
	}, [selectedDayIndex]);

	return (
		<nav className={styles["mobile-navigation"]}>
			<div className={styles["slider-section"]}>
				{navItems.map(({ value, label }) => {
					return (
						<button
							key={value}
							onClick={() => onChange(value)}
							className={clsx(styles["slider-button"], value === content && styles.active)}
						>
							<div className={styles["slider-button-label"]}>{label}</div>
							{value && <div className={styles.underline} />}
						</button>
					);
				})}
			</div>
			<div className={styles["date-section"]}>
				<button
					className={styles["icon-button"]}
					onClick={() => setBaseDate(prev => new Date(prev.getTime() - 7 * dayInMs))}
				>
					<Icon name="chevron-left" />
				</button>
				<Text>{rangeLabel}</Text>
				<button
					className={styles["icon-button"]}
					onClick={() => setBaseDate(prev => new Date(prev.getTime() + 7 * dayInMs))}
				>
					<Icon name="chevron-right" />
				</button>
			</div>
			<div className={styles["calendar-section"]}>
				{days.map(({ label, date }, index) => (
					<button
						key={index}
						ref={(el) => {
							dayRefs.current[index] = el;
						}}
						className={clsx(
							styles["day-button"],
							index === selectedDayIndex && styles["active-day"],
						)}
						onClick={() => setSelectedDayIndex(index)}
					>
						<Text>{label}</Text>
						<Text className={styles["day-date"]}>{date}</Text>
					</button>
				))}
			</div>
		</nav>
	);
}
