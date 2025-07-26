import { Text } from "@atoms/Text/Text";
import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
	variant?: "primary" | "secondary";
	children: ReactNode;
	className?: string;
	type?: "button" | "submit" | "reset";
	size?: "xs" | "sm" | "base" | "lg" | "xl";
	fontWeight?: 300 | 500 | 600 | 700;
	onClick?: () => void;
};

export function Button({
	variant = "primary",
	children,
	className,
	type = "button",
	size,
	fontWeight,
	onClick,
}: ButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={clsx(styles.button, styles[variant], className)}
		>
			<Text size={size} fontWeight={fontWeight}>
				{children}
			</Text>
		</button>
	);
}
