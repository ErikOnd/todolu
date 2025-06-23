import clsx from "clsx";
import styles from "./Text.module.scss";
import {ReactNode} from "react";

type TextProps = {
	size?: "xs" | "s" | "m"| "l";
	as?: "p" | "span" | "div";
	children: ReactNode;
	className?: string;
};

export function Text({
	                     size = "m",
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
