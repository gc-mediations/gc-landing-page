import { toast } from "@/hooks/use-toast.ts";
import { socials } from "@/static-data/socials.tsx";
import { motion } from "framer-motion";
import { CopyIcon } from "lucide-react";
import { nanoid } from "nanoid";
import type { SetStateAction } from "react";
import { useEffect, useState } from "react";

export const Footer = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

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

	return (
		<footer className="bg-muted p-4 md:py-6 w-full">
			<div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
				<div className="text-sm text-muted-foreground text-center md:text-left">
					<p>
						Mediazioni Gaetano Castiglia. Codice IVASS: E000366730 | Oam M447 |{" "}
						<a href={"www.24max.it"}>24Max</a>
					</p>
				</div>
				<div className={"w-full md:w-auto flex justify-center md:justify-end"}>
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

								{!social.link && !isMobile && (
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
			</div>
		</footer>
	);
};
