import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils.ts";
import { socials } from "@/static-data/socials";
import {
	type PanInfo,
	motion,
	useMotionValue,
	useTransform,
} from "framer-motion";
import {
	ChevronDownIcon,
	ChevronUpIcon,
	CopyIcon,
	InfoIcon,
} from "lucide-react";
import { nanoid } from "nanoid";
import { useRef, useState } from "react";

export const Footer = () => {
	const isMobile = useIsMobile();
	const [isOpen, setIsOpen] = useState(false);
	const constraintsRef = useRef(null);
	const sheetRef = useRef(null);
	const y = useMotionValue(0);
	const opacity = useTransform(y, [-50, 0], [0, 1]);

	const handleCopy = async (
		title: string | undefined,
		label: string | undefined,
	) => {
		if (!label) return;
		try {
			await navigator.clipboard.writeText(label);
			toast({
				title: `${title} copiato/a! `,
			});
		} catch (error) {
			toast({
				title: "Errore durante la copia negli appunti",
				description: String(error),
			});
		}
	};

	const handleDragEnd = (
		_event: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo,
	) => {
		if (info.offset.y < -50 && !isOpen) {
			setIsOpen(true);
		}
	};

	const handleSheetDragEnd = (
		_event: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo,
	) => {
		if (info.offset.y > 50 && isOpen) {
			setIsOpen(false);
		}
	};

	const FooterContent = () => (
		<>
			<Popover>
				<div className={"flex flex-col items-center"}>
					<PopoverTrigger className="bg-muted hover:border-gray-200 text-sm text-muted-foreground sm:text-center md:text-left">
						<p className={"flex flex-row items-center gap-2"}>
							<InfoIcon size={16} />
							Mediatore Creditizio – OAM: M447 |{" "}
							<a
								href="https://www.24max.it"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								24Max
							</a>
						</p>
					</PopoverTrigger>
				</div>

				<PopoverContent
					align={isMobile ? "center" : "start"}
					className={cn(isMobile ? "w-[300px]" : "w-[500px]", "text-sm p-4")}
				>
					Credit specialist di 24MAX S.p.A, mediatore creditizio iscritto al n.
					M447 dell’elenco tenuto dall’Organismo degli Agenti e dei Mediatori.
					Nello svolgimento della sua attività, 24 MAX SPA per tramite dei suoi
					collaboratori pone in relazione gli istituti di credito con la
					clientela per la concessione di finanziamenti. 24 MAX SPA agisce quale
					mediatore convenzionato.
					<Separator className={"my-2"} />
					<div className={"flex flex-row"}>
						<p className={"font-semibold"}>Codice IVASS</p>: E000366730.
					</div>
				</PopoverContent>
			</Popover>
			{isMobile && <Separator className={"my-4"} />}
			<div
				className={cn(
					"w-full md:w-auto flex pr-3",
					isMobile ? "justify-center pt-1" : "justify-end",
				)}
			>
				<div className="border border-gray-300 rounded-md p-4 relative">
					<span className="absolute -top-3 left-3 bg-muted px-2 text-sm font-semibold text-gray-600 rounded-md">
						Social e contatti
					</span>
					<div className={"grid grid-cols-4 gap-4 text-sm"}>
						{socials.map((social) => (
							<motion.div
								key={nanoid()}
								whileHover={{ scale: 1.1 }}
								className="relative"
							>
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<div
									className="flex items-center justify-center gap-0.5 group hover:bg-gray-300 rounded-md p-2 opacity-70 hover:opacity-100 transition-all ease-in-out duration-300 hover:cursor-pointer"
									onClick={() => {
										social.link
											? window.open(social.link)
											: handleCopy(social.title, social.label);
									}}
								>
									{social.icon}
								</div>

								{!social.link && (
									// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
									<div
										className="absolute top-0 right-0 p-1 bg-white rounded-full shadow-md hover:bg-gray-100 cursor-pointer"
										onClick={async (e) => {
											e.stopPropagation();
											await handleCopy(social.title, social.link);
										}}
									>
										<CopyIcon size={8} />
									</div>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</>
	);

	if (isMobile) {
		return (
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<motion.div
						ref={constraintsRef}
						className="fixed bottom-0 left-0 right-0"
					>
						<motion.div
							drag="y"
							dragConstraints={constraintsRef}
							dragElastic={0.2}
							onDragEnd={handleDragEnd}
							style={{ y, opacity }}
						>
							<Button
								variant="outline"
								className="w-full rounded-none flex items-center justify-center py-3"
							>
								<ChevronUpIcon className="mr-2" />
								Scorri in alto o premi per aprire
							</Button>
						</motion.div>
					</motion.div>
				</SheetTrigger>
				<SheetContent side="bottom" className="overflow-hidden" ref={sheetRef}>
					<motion.div
						drag="y"
						dragConstraints={sheetRef}
						dragElastic={0.2}
						onDragEnd={handleSheetDragEnd}
						className="h-full"
					>
						<SheetHeader>
							<SheetTitle
								className={
									"flex flex-row items-center justify-center text-sm gap-2"
								}
								onClick={() => setIsOpen(false)}
							>
								<ChevronDownIcon size={24} className="text-muted-foreground" />
								Scorri in basso o premi per chiudere
							</SheetTitle>
						</SheetHeader>
						<div className="mt-4 overflow-auto">
							<FooterContent />
						</div>
					</motion.div>
				</SheetContent>
			</Sheet>
		);
	}

	return (
		<footer className="bg-muted p-4 md:py-6 w-full">
			<div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
				<FooterContent />
			</div>
		</footer>
	);
};
