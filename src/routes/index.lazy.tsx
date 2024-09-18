import greet from "@/assets/photos/greet.jpeg";
import Collage from "@/components/ui/collage.tsx";
import { Greet } from "@/components/ui/greet";
import ResizableCollage from "@/components/ui/resizable-collage.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { useIsMobile } from "@/hooks/use-is-mobile.ts";
import { gallery } from "@/static-data/gallery.ts";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	const isMobile = useIsMobile();

	return (
		<motion.div
			className="flex flex-col items-center justify-center min-h-fit w-full pb-4"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div className="flex flex-col items-center gap-4">
				<div className="flex-1">
					<Greet
						image={greet}
						title={"Piacere, Gaetano. Credit Specialist."}
						description={
							"Come credit specialist 24MAX, trovo nel mio lavoro l'espressione perfetta della mia indipendenza e competenza. La sinergia con il network RE/MAX mi offre un ambiente fertile di opportunità, permettendomi di crescere professionalmente e di offrire un servizio sempre più completo."
						}
						actions={[
							{ link: "/about/", label: "Scopri di più" },
							{ link: "/awards/", label: "Riconoscimenti" },
						]}
					/>
				</div>
				<Separator />
				<div className={"text-center"}>
					<p className={"font-bold text-4xl"}>Gallery</p>
					<p className={"text-muted-foreground"}>
						Interazione con clienti e collaboratori, sempre
					</p>
				</div>
				{isMobile ? (
					<Collage images={gallery} />
				) : (
					<ResizableCollage images={gallery} />
				)}
			</div>
		</motion.div>
	);
}
