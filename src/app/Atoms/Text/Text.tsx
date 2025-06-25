import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./Text.module.scss";

type TextProps = {
	size?: "xs" | "sm" | "base" | "lg" | "xl";
	as?: "p" | "span" | "div";
	children: ReactNode;
	className?: string;
};

export function Text({
	size = "base",
	as = "div",
	children,
	className,
}: TextProps) {
	const Tag = as;
	return (
		<Tag className={clsx(styles[`text-${size}`], className)}>
			{children}
		</Tag>
	);
}
