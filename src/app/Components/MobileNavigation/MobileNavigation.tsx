"use client";

import { Icon } from "@atoms/Icons/Icon";
import { Text } from "@atoms/Text/Text";
import clsx from "clsx";
import styles from "./MobileNavigation.module.scss";

import { useState } from "react";

const navItems = [
	{ value: "weekly", label: "Weekly" },
	{ value: "remember", label: "To Remember" },
	{ value: "profile", label: "Profile" },
];

export function MobileNavigation() {
	const [content, setContent] = useState("weekly");

	return (
		<nav className={styles["mobile-navigation"]}>
			<Text className={styles["navigation-header"]}>
				ToDoLu
			</Text>
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
				<button className={styles["icon-button"]}>
					<Icon name="chevron-left" />
				</button>
				<Text>May 29 - June 4</Text>
				<button className={styles["icon-button"]}>
					<Icon name="chevron-right" />
				</button>
			</div>
		</nav>
	);
}
