import Reviews from "@/components/ui/reviews.tsx";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/feedback/")({
	component: Feedback,
});

function Feedback() {
	return (
		<motion.div
			initial={{ y: 300, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -100, opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<Reviews />
		</motion.div>
	);
}
