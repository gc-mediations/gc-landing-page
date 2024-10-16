import greet from "@/assets/photos/greet.jpeg";
import BulletList from "@/components/ui/bullet-list.tsx";
import Collage from "@/components/ui/collage.tsx";
import { Greet } from "@/components/ui/greet";
import ResizableCollage from "@/components/ui/resizable-collage.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { useIsMobile } from "@/hooks/use-is-mobile.ts";
import { gallery } from "@/static-data/gallery.ts";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MedalIcon, MessageCircleQuestionIcon } from "lucide-react";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	const isMobile = useIsMobile();

	return (
		<motion.div
			className="flex flex-col items-center justify-center min-h-fit w-full py-2"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div className="flex flex-col items-center gap-4">
				<div
					className={
						"p-8 bg-card rounded-md hover:shadow-md transition-shadow ease-in-out w-full"
					}
				>
					<div className="flex-1">
						<Greet
							image={greet}
							title={"Piacere, Gaetano."}
							description={
								"Scopri il mutuo che si adatta alle tue esigenze attraverso una consulenza personalizzata.\n" +
								"Con 24MAX ottenere il mutuo per la tua nuova casa è ancora più semplice:\n" +
								"Gaetano Castiglia, Credit Specialist, lavora al tuo fianco per farti risparmiare tempo, semplificare la raccolta documentale e presentarti il prodotto creditizio più conveniente grazie alle numerose convenzioni con i nostri partner bancari.\n"
							}
							actions={[
								{
									link: "/about/",
									label: "Chi sono",
									size: isMobile ? "sm" : "lg",
									variant: "default",
									icon: <MessageCircleQuestionIcon size={18} />,
								},
								{
									link: "/awards/",
									label: "Riconoscimenti",
									size: isMobile ? "sm" : "lg",
									variant: "secondary",
									icon: <MedalIcon size={18} />,
								},
							]}
						/>
					</div>
				</div>

				<Separator />

				<div
					className={
						"p-8 bg-card rounded-md hover:shadow-md transition-shadow ease-in-out  w-full"
					}
				>
					<div className={"text-center pb-4"}>
						<p className={"font-bold text-3xl"}>Servizi</p>
						<p className={"text-muted-foreground text-lg"}>
							Cosa offro ai miei clienti
						</p>
					</div>
					<BulletList
						items={[
							{
								title: "Mutuo",
								description:
									"La soluzione creditizia per ogni progetto immobiliare. Mutuo acquisto, mutuo per ristrutturazione, mutuo green, mutuo giovani under 36, surroghe e altri prodotti dedicati.\n",
							},
							{
								title: "Prestiti e cessione del quinto",
								description:
									"La nostra offerta di finanziamenti e prestiti personali per farti ottenere liquidità immediata. Un panel ricco di proposte e di partner per tutti i tuoi progetti.",
							},
							{
								title: "Assicurazioni per la protezione del credito",
								description:
									"Proteggi il tuo investimento con le nostre polizze assicurative per la protezione del credito.",
							},
						]}
					/>
				</div>

				<Separator />

				<div
					className={
						"p-8 bg-card rounded-md hover:shadow-md transition-shadow ease-in-out"
					}
				>
					<div className={"text-center pb-4"}>
						<p className={"font-bold text-3xl"}>Gallery</p>
						<p className={"text-muted-foreground text-lg"}>
							Interazione con clienti e collaboratori, sempre
						</p>
					</div>
					{isMobile ? (
						<Collage images={gallery} />
					) : (
						<ResizableCollage images={gallery} />
					)}
				</div>
			</div>
		</motion.div>
	);
}
