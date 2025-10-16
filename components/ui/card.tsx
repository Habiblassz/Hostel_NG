import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	variant?: "default" | "elevated";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	({ className, variant = "default", ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					"rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark",
					{
						"shadow-md": variant === "default",
						"shadow-lg hover:shadow-xl transition-shadow duration-300":
							variant === "elevated",
					},
					className
				)}
				{...props}
			/>
		);
	}
);

Card.displayName = "Card";

export default Card;
