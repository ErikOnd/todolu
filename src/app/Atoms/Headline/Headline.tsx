import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./Headline.module.scss";

type HeadlineProps = {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size?: 1 | 2 | 3 | 4 | 5 | 6;
	children: ReactNode;
	className?: string;
};

export function Headline({
	as = "h2",
	size = 1,
	children,
	className,
}: HeadlineProps) {
	const Tag = as;
	return (
		<Tag className={clsx(styles[`headline${size}`], className)}>
			{children}
		</Tag>
	);
}
