import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";

interface ImageCollageProps {
	images: string[];
	cycleInterval?: number;
	orientation?: "vertical" | "horizontal";
}

interface ImageWithId {
	id: string;
	src: string;
	isPaused: boolean;
}

export function ImageCollage({
	images,
	cycleInterval = 5000,
	orientation = "vertical",
}: ImageCollageProps) {
	const [imageSlots, setImageSlots] = useState<ImageWithId[]>(() =>
		images
			.slice(0, 3)
			.map((img) => ({ id: nanoid(), src: img, isPaused: false })),
	);
	const [recentlyUsed, setRecentlyUsed] = useState<string[]>([]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setImageSlots((prevSlots) => {
				const newSlots = [...prevSlots];
				const availableIndexes = newSlots.reduce((acc, slot, index) => {
					if (!slot.isPaused) acc.push(index);
					return acc;
				}, [] as number[]);

				if (availableIndexes.length === 0) return newSlots;

				const randomIndex =
					availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

				const availableImages = images.filter(
					(img) =>
						!recentlyUsed.includes(img) && !newSlots.find((i) => i.src === img),
				);

				let nextImage: string;
				if (availableImages.length > 0) {
					nextImage =
						availableImages[Math.floor(Math.random() * availableImages.length)];
				} else {
					const resetAvailable = images.filter(
						(img) => !newSlots.find((i) => i.src === img),
					);
					nextImage =
						resetAvailable[Math.floor(Math.random() * resetAvailable.length)];
				}

				setRecentlyUsed((prev) => {
					const updated = [nextImage, ...prev].slice(0, images.length - 3);
					return updated;
				});

				newSlots[randomIndex] = {
					id: nanoid(),
					src: nextImage,
					isPaused: false,
				};
				return newSlots;
			});
		}, cycleInterval);

		return () => clearInterval(intervalId);
	}, [images, cycleInterval, recentlyUsed]);

	const handleMouseEnter = (index: number) => {
		setImageSlots((prevSlots) => {
			const newSlots = [...prevSlots];
			newSlots[index] = { ...newSlots[index], isPaused: true };
			return newSlots;
		});
	};

	const handleMouseLeave = (index: number) => {
		setImageSlots((prevSlots) => {
			const newSlots = [...prevSlots];
			newSlots[index] = { ...newSlots[index], isPaused: false };
			return newSlots;
		});
	};

	const containerClass =
		orientation === "vertical"
			? "grid grid-cols-1 gap-8"
			: "grid grid-cols-3 gap-8";

	return (
		<div
			className={`w-full mx-auto ${orientation === "vertical" ? "max-w-sm" : "max-w-3xl"}`}
		>
			<div className={containerClass}>
				{imageSlots.map((image, index) => (
					<motion.div
						key={index}
						className="relative aspect-square overflow-hidden rounded-lg"
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={() => handleMouseLeave(index)}
						animate={{
							scale: image.isPaused ? 1.1 : 1,
							zIndex: image.isPaused ? 1000 : 0,
						}}
						transition={{
							scale: { duration: 0.3, ease: "easeInOut" },
						}}
					>
						<AnimatePresence mode="wait">
							<motion.img
								key={image.id}
								src={image.src}
								alt=""
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
								}}
								exit={{ opacity: 0 }}
								transition={{
									opacity: { duration: 1.5, ease: "easeInOut" },
								}}
								className="absolute inset-0 w-full h-full object-cover"
							/>
						</AnimatePresence>
					</motion.div>
				))}
			</div>
		</div>
	);
}
