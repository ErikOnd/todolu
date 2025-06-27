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
	onSelectDate: (date: Date) => void;
	selectedDate: Date;
	baseDate: Date;
	setBaseDate: (date: Date) => void;
};

const navItems: { value: "weekly" | "remember" | "profile"; label: string }[] = [
	{ value: "weekly", label: "Weekly" },
	{ value: "remember", label: "To Remember" },
	{ value: "profile", label: "Profile" },
];

export function MobileNavigation(props: MobileNavigationProps) {
	const { content, onChange, onSelectDate, selectedDate, baseDate, setBaseDate } = props;
	const { days, rangeLabel } = getCurrentWeek(baseDate);
	const dayRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const dayInMs = 86400000;

	const containerRef = useRef<HTMLDivElement>(null);
	const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const active = container.querySelector(`.${styles.active}`) as HTMLElement;
		if (active) {
			setUnderlineStyle({
				left: active.offsetLeft,
				width: active.offsetWidth,
			});
		}
	}, [content]);

	return (
		<nav className={styles["mobile-navigation"]}>
			<div className={styles["slider-section"]} ref={containerRef}>
				{navItems.map(({ value, label }) => (
					<button
						key={value}
						onClick={() => onChange(value)}
						className={clsx(styles["slider-button"], value === content && styles.active)}
					>
						<div className={styles["slider-button-label"]}>{label}</div>
					</button>
				))}
				<div className={styles["slider-underline"]} style={underlineStyle} />
			</div>
			<div className={styles["date-section"]}>
				<button
					className={styles["icon-button"]}
					onClick={() => setBaseDate(new Date(baseDate.getTime() - 7 * dayInMs))}
				>
					<Icon name="chevron-left" />
				</button>
				<Text>{rangeLabel}</Text>
				<button
					className={styles["icon-button"]}
					onClick={() => setBaseDate(new Date(baseDate.getTime() + 7 * dayInMs))}
				>
					<Icon name="chevron-right" />
				</button>
			</div>
			<div className={styles["calendar-section"]}>
				{days.map(({ label, date, fullDate }, index) => (
					<button
						key={index}
						ref={(el) => {
							dayRefs.current[index] = el;
						}}
						className={clsx(
							styles["day-button"],
							fullDate.toDateString() === selectedDate.toDateString() && styles["active-day"],
						)}
						onClick={() => {
							onSelectDate(fullDate);
						}}
					>
						<Text>{label}</Text>
						<Text className={styles["day-date"]}>{date}</Text>
					</button>
				))}
			</div>
		</nav>
	);
}
