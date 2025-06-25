"use client";

import { Icon } from "@atoms/Icons/Icon";
import { Text } from "@atoms/Text/Text";
import clsx from "clsx";
import styles from "./MobileNavigation.module.scss";

import { getCurrentWeek } from "@utils/getCurrentWeek";
import { useEffect, useRef, useState } from "react";

const navItems = [
	{ value: "weekly", label: "Weekly" },
	{ value: "remember", label: "To Remember" },
	{ value: "profile", label: "Profile" },
];

export function MobileNavigation() {
	const [content, setContent] = useState("weekly");
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
							onClick={() => {
								setContent(value);
							}}
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
