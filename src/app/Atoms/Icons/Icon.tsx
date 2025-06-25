import ChevronLeft from "@assets/icons/chevron-left.svg";
import ChevronRight from "@assets/icons/chevron-right.svg";
import clsx from "clsx";

const icons = {
	"chevron-left": ChevronLeft,
	"chevron-right": ChevronRight,
};

type IconName = keyof typeof icons;

type IconProps = {
	name: IconName;
	size?: number | string;
	className?: string;
	ariaLabel?: string;
};

export function Icon({ name, size = 24, className, ariaLabel }: IconProps) {
	const Icon = icons[name];

	return (
		<Icon
			width={size}
			height={size}
			className={clsx("icon", className)}
			aria-label={ariaLabel}
			aria-hidden={!ariaLabel}
			role="img"
		/>
	);
}
