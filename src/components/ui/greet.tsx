import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface GreetProps {
	title: string;
	description: string;
	actions?: {
		label: string;
		link: string;
		size?: "sm" | "lg" | "default" | "icon" | null | undefined;
		icon?: ReactNode;
		variant?:
			| "link"
			| "default"
			| "secondary"
			| "destructive"
			| "outline"
			| "ghost"
			| null
			| undefined;
	}[];
	image: string;
}

export const Greet = ({ title, description, actions, image }: GreetProps) => {
	return (
		<div className="container mx-auto px-4 pt-4 pb-4 md:pt-8 md:pb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
			<div className="flex items-center justify-center">
				<img
					src={image}
					alt="Greet"
					className="w-full max-w-[400px] aspect-square rounded-lg object-cover"
					width="400"
					height="400"
				/>
			</div>
			<div className="flex flex-col items-start justify-center h-full max-h-[400px] overflow-auto">
				<div className="space-y-2">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
						{title}
					</h2>
					<p className="text-muted-foreground md:text-xl">{description}</p>
				</div>

				<div className={cn("flex flex-row gap-2 items-center pt-4")}>
					{actions?.map((action) => (
						<Link key={action.link} to={action.link}>
							<Button
								className={
									"flex flex-row gap-2 hover:border-primary hover:text-red-500"
								}
								size={action.size || "default"}
								variant={action.variant || "default"}
							>
								{" "}
								{action.icon && action.icon}
								{action.label}
							</Button>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
