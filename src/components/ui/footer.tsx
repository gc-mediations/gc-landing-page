"use client";

import {socials} from "@/static-data/socials.tsx";
import {nanoid} from "nanoid";
import {type SetStateAction, useState} from "react";

export const Footer = () => {
	const [copiedIndex, setCopiedIndex] = useState(-1);
	const [showCopiedPopup, setShowCopiedPopup] = useState(false);
	const handleCopy = async (
		index: SetStateAction<number>,
		label: string | undefined,
	) => {
		if (index === 0 || index === 1) {
			if (typeof label === "string") {
				await navigator.clipboard.writeText(label);
			}
			setCopiedIndex(index);
			setShowCopiedPopup(true);
			setTimeout(() => {
				setCopiedIndex(-1);
				setShowCopiedPopup(false);
			}, 2000);
		}
	};
	return (
		<footer className="bg-muted p-4 md:py-6 w-full">
			<div className="container max-w-7xl flex justify-between items-center mx-auto ">
				<div className="text-sm text-muted-foreground">
					&copy; 2024 Mediazioni Gaetano Castiglia. Tutti i diritti riservati.
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-sm relative">
					{socials.map((social, index) => (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<div
							key={nanoid()}
							className="flex items-center justify-center gap-0.5 group hover:bg-gray-300 rounded-md p-1 hover:cursor-pointer"
							onClick={() => {
								social.link
									? window.open(social.link)
									: handleCopy(index, social.label);
							}}
						>
							{showCopiedPopup && copiedIndex === index && (
								<div className="absolute bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs -top-8">
									Copiato!
								</div>
							)}
							{social.icon}
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};
