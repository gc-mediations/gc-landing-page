import { Button } from "@/components/ui/button";
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
import { socials } from "@/static-data/socials";
import {
	type PanInfo,
	motion,
	useMotionValue,
	useTransform,
} from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon, CopyIcon } from "lucide-react";
import { nanoid } from "nanoid";
import type { SetStateAction } from "react";
import { useRef, useState } from "react";

export const Footer = () => {
	const isMobile = useIsMobile();
	const [isOpen, setIsOpen] = useState(false);
	const constraintsRef = useRef(null);
	const sheetRef = useRef(null);
	const y = useMotionValue(0);
	const opacity = useTransform(y, [-50, 0], [0, 1]);

	const handleCopy = async (
		index: SetStateAction<number>,
		title: string | undefined,
		label: string | undefined,
	) => {
		if (index === 0 || index === 1) {
			if (!label) return;
			await navigator.clipboard.writeText(label);
			toast({
				title: `${title} copiato/a! `,
			});
		}
	};

	const handleDragEnd = (
		event: MouseEvent | TouchEvent | PointerEvent,
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
		if (info.offset.y > 100 && isOpen) {
			setIsOpen(false);
		}
	};

	const FooterContent = () => (
		<>
			<div className="text-sm text-muted-foreground text-center md:text-left ">
				<p>Mediazioni Gaetano Castiglia. </p>
				<p>
					Codice IVASS: E000366730 | Oam M447 |{" "}
					<a href={"www.24max.it"}>24Max</a>
				</p>
			</div>
			{isMobile && <Separator className={"my-4"} />}
			<div className={"w-full md:w-auto flex justify-end pr-3"}>
				<div className={"grid grid-cols-5 gap-4 text-sm"}>
					{socials.map((social, index) => (
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
										: handleCopy(index, social.title, social.label);
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
										await handleCopy(index, social.title, social.link);
									}}
								>
									<CopyIcon size={8} />
								</div>
							)}
						</motion.div>
					))}
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
								Scorri in alto o clicca per aprire
							</Button>
						</motion.div>
					</motion.div>
				</SheetTrigger>
				<SheetContent
					side="bottom"
					className="h-[22vh] overflow-hidden"
					ref={sheetRef}
				>
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
							>
								<ChevronDownIcon size={24} className="text-muted-foreground" />
								Scorri in basso per chiudere
							</SheetTitle>
						</SheetHeader>
						<div className="mt-4 overflow-auto h-[calc(80vh-100px)]">
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
