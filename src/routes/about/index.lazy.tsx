import Reviews from "@/components/ui/reviews.tsx";
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
			className="flex flex-col items-center justify-center min-h-fit w-full"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div className="w-full border-b">
				<Timeline
					title={"Carriera"}
					subtitle={"La mia storia fino ad oggi"}
					landmarks={landmarks}
				/>
			</div>

			<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center pt-8">
				Cosa pensano i clienti
			</h2>
			<Reviews />
		</motion.div>
	);
}
