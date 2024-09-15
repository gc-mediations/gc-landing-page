import ImageCollage from "@/components/ui/image-collage.tsx";
import { awards } from "@/static-data/awards.ts";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/awards/")({
	component: Awards,
});

function Awards() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="container mx-auto p-4"
		>
			<ImageCollage images={awards} />
		</motion.div>
	);
}
