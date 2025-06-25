"use client";
import styles from "./HomePage.module.scss";

import { DesktopNavigation } from "@components/DesktopNavigation/DesktopNavigation";
import { MobileNavigation } from "@components/MobileNavigation/MobileNavigation";
import { Sidebar } from "@components/SideBar/Sidebar";
import { useMediaQuery } from "@hooks/useMediaQuery";

export default function HomePage() {
	const isMobile = useMediaQuery("(max-width: 1023px)");
	return (
		<div className={styles["home-page"]}>
			{isMobile
				? (
					<div className={styles["mobile-view"]}>
						<MobileNavigation />
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
