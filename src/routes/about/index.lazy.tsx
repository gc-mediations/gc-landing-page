import Reviews from "@/components/ui/reviews.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Timeline } from "@/components/ui/timeline.tsx";
import { landmarks } from "@/static-data/landmarks.ts";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/about/")({
	component: About,
});

function About() {
	return (
		<motion.div
			className="flex flex-col items-center justify-center min-h-fit w-full gap-4"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div
				className={
					"pb-8 bg-card rounded-md hover:shadow-md transition-shadow ease-in-out w-full mt-2"
				}
			>
				<div className="w-full">
					<Timeline
						title={"Carriera"}
						subtitle={"La mia storia fino ad oggi"}
						landmarks={landmarks}
					/>
				</div>
			</div>

			<Separator />

			<div
				className={
					"pb-8 bg-card rounded-md hover:shadow-md transition-shadow ease-in-out  w-full"
				}
			>
				<p className="text-3xl font-bold tracking-tighter sm:text-3xl text-center pt-8">
					Recensioni
				</p>
				<p className="text-muted-foreground text-center text-xl">
					Le opinioni dei miei clienti, pubblicamente disponibili su Facebook
				</p>
				<Reviews />
			</div>
		</motion.div>
	);
}
