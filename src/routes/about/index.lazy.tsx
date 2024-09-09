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
			initial={{ y: 300, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -100, opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Timeline
				title={"In sintesi"}
				subtitle={"La mia storia"}
				landmarks={landmarks}
			/>
		</motion.div>
	);
}
