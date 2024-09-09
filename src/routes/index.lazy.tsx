import { Greet } from "@/components/ui/greet";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<Greet
			title={"Pluripremiato consulente del credito"}
			description={
				"Offro consulenza e assistenza per l'ottenimento di prestiti personali, prestiti auto, prestiti casa, prestiti per studenti, prestiti per imprese e molto altro. Contattami per una consulenza gratuita e senza impegno."
			}
			action={{ link: "/about/", label: "Scopri di più" }}
		/>
	);
}
