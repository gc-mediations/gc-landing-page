import { Link } from "@tanstack/react-router";

interface GreetProps {
	title: string;
	description: string;
	action?: {
		label: string;
		link: string;
	};
	image: string;
}

export const Greet = ({ title, description, action, image }: GreetProps) => {
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

				{action && (
					<Link
						to={action.link}
						className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					>
						{action.label}
					</Link>
				)}
			</div>
		</div>
	);
};
