import collab_0 from "@/assets/images/collab_0.jpeg";
import collab_1 from "@/assets/images/collab_1.jpeg";
import collab_2 from "@/assets/images/collab_2.jpeg";
import collab_3 from "@/assets/images/collab_3.jpeg";
import collab_4 from "@/assets/images/collab_4.jpeg";
import greet from "@/assets/images/greet.jpeg";
import { ImageCollage } from "@/components/ui/collage.tsx";
import { Greet } from "@/components/ui/greet";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<motion.div
			initial={{ y: 300, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -100, opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="container mx-auto px-4"
		>
			<div className="flex flex-col items-center gap-4">
				<div className="flex-1 border-b">
					<Greet
						image={greet}
						title={"Pluripremiato consulente del credito"}
						description={
							"Offro consulenza e assistenza per l'ottenimento di prestiti personali, prestiti auto, prestiti casa, prestiti per studenti, prestiti per imprese e molto altro. Contattami per una consulenza gratuita e senza impegno."
						}
						action={{ link: "/about/", label: "Scopri di più" }}
					/>
				</div>
				<div className={"text-center"}>
					<p className={"font-bold text-4xl"}>Gallery</p>
					<p className={"text-muted-foreground"}>
						Uno sguardo alla mia quotidianità
					</p>
				</div>
				<ImageCollage
					images={[collab_0, collab_1, collab_2, collab_3, collab_4]}
					orientation="horizontal"
				/>
			</div>
		</motion.div>
	);
}
