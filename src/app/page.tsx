"use client";
import styles from "./HomePage.module.scss";

import { DesktopNavigation } from "@components/DesktopNavigation/DesktopNavigation";
import { MobileNavigation } from "@components/MobileNavigation/MobileNavigation";
import { ProfileContent } from "@components/ProfileContent/ProfileContent";
import { RememberContent } from "@components/RememberContent/RememberContent";
import { Sidebar } from "@components/SideBar/Sidebar";
import { WeeklyContent } from "@components/WeeklyContent/WeeklyContent";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { useState } from "react";

export default function HomePage() {
	const isMobile = useMediaQuery("(max-width: 1023px)");
	const [selectedContent, setSelectedContent] = useState<"weekly" | "remember" | "profile">("weekly");
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());

	const renderMobileContent = () => {
		switch (selectedContent) {
			case "weekly":
				return <WeeklyContent selectedDate={selectedDate} />;
			case "remember":
				return <RememberContent />;
			case "profile":
				return <ProfileContent />;
			default:
				return null;
		}
	};

	return (
		<div className={styles["home-page"]}>
			{isMobile
				? (
					<div className={styles["mobile-view"]}>
						<MobileNavigation
							content={selectedContent}
							onChange={setSelectedContent}
							onSelectDate={setSelectedDate}
						/>
						{renderMobileContent()}
					</div>
				)
				: (
					<div className={styles["desktop-view"]}>
						<DesktopNavigation />
						<Sidebar />
					</div>
				)}
		</div>
	);
}
