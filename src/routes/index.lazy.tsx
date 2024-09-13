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
						title={"Piacere, Gaetano. Credit Specialist."}
						description={
							"Lavorare in 24MAX significa esprimere la mia indipendenza e competenza in un ambiente connesso con tanti agenti immobiliari”.\n" +
							"Gaetano Castiglia credit specialist 24MAX di Catania, trova nella vicinanza al network RE/MAX un terreno fertile di sinergie ed opportunità. La possibilità di svilupparle e coglierle passa da un modello aziendale che informa e accresce strumenti e abilità del consulente del credito."
						}
						action={{ link: "/about/", label: "Scopri di più" }}
					/>
				</div>
				<div className={"text-center"}>
					<p className={"font-bold text-4xl"}>Gallery</p>
					<p className={"text-muted-foreground"}>
						Interazione con clienti e collaboratori, sempre
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
