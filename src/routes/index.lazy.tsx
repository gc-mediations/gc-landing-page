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
		>
			{" "}
			<Greet
				title={"Pluripremiato consulente del credito"}
				description={
					"Offro consulenza e assistenza per l'ottenimento di prestiti personali, prestiti auto, prestiti casa, prestiti per studenti, prestiti per imprese e molto altro. Contattami per una consulenza gratuita e senza impegno."
				}
				action={{ link: "/about/", label: "Scopri di più" }}
			/>
		</motion.div>
	);
}
