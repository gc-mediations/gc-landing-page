import Collage from "@/components/ui/collage.tsx";
import ResizableCollage from "@/components/ui/resizable-collage.tsx";
import { useIsMobile } from "@/hooks/use-is-mobile.ts";
import { awards } from "@/static-data/awards.ts";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/awards/")({
	component: Awards,
});

function Awards() {
	const isMobile = useIsMobile();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="container mx-auto p-4"
		>
			<div className={"text-center pb-4"}>
				<p className={"font-bold text-4xl"}>Ecco.</p>
				<p className={"text-muted-foreground"}>
					Costanza e determinazione vengono sempre premiati
				</p>
			</div>
			{isMobile ? (
				<Collage images={awards} />
			) : (
				<ResizableCollage images={awards} />
			)}
		</motion.div>
	);
}
