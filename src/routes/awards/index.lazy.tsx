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
			className="container mx-auto pt-2"
		>
			<div
				className={
					"pb-8 px-8 bg-card rounded-md hover:shadow-md transition-shadow ease-in-out w-full"
				}
			>
				<div className={"text-center py-4"}>
					<p className={"font-bold text-3xl"}>Riconoscimenti</p>
					<p className={"text-muted-foreground"}>
						Cosa ho ottenuto nel corso degli anni
					</p>
				</div>
				{isMobile ? (
					<Collage images={awards} />
				) : (
					<ResizableCollage images={awards} />
				)}
			</div>
		</motion.div>
	);
}
