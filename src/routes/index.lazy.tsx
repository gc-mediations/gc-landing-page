import collab_0 from "@/assets/photos/collab_0.jpeg";
import collab_1 from "@/assets/photos/collab_1.jpeg";
import collab_2 from "@/assets/photos/collab_2.jpeg";
import collab_3 from "@/assets/photos/collab_3.jpeg";
import collab_4 from "@/assets/photos/collab_4.jpeg";
import collab_5 from "@/assets/photos/collab_5.jpeg";
import greet from "@/assets/photos/greet.jpeg";
import prize_0 from "@/assets/photos/prize_0.jpeg";
import { Collage } from "@/components/ui/collage.tsx";
import { Greet } from "@/components/ui/greet";
import { Separator } from "@/components/ui/separator.tsx";
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
				<div className="flex-1">
					<Greet
						image={greet}
						title={"Piacere, Gaetano. Credit Specialist."}
						description={
							"Come credit specialist 24MAX, trovo nel mio lavoro l'espressione perfetta della mia indipendenza e competenza. La sinergia con il network RE/MAX mi offre un ambiente fertile di opportunità, permettendomi di crescere professionalmente e di offrire un servizio sempre più completo."
						}
						action={{ link: "/about/", label: "Scopri di più" }}
					/>
				</div>
				<Separator />
				<div className={"text-center"}>
					<p className={"font-bold text-4xl"}>Gallery</p>
					<p className={"text-muted-foreground"}>
						Interazione con clienti e collaboratori, sempre
					</p>
				</div>
				<Collage
					images={[
						collab_0,
						collab_1,
						collab_2,
						collab_3,
						collab_4,
						collab_5,
						prize_0,
					]}
					orientation="horizontal"
				/>
			</div>
		</motion.div>
	);
}
