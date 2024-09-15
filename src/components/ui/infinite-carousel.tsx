import { useIsMobile } from "@/hooks/use-is-mobile.ts";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { nanoid } from "nanoid";
import { type ReactNode, useEffect, useRef, useState } from "react";

interface InfiniteCarouselProps<T> {
	items: T[];
	renderItem: (item: T, index: number) => ReactNode;
	itemWidth?: number;
	itemGap?: number;
	scrollSpeed?: number;
}

export function InfiniteCarousel<T>({
	items,
	renderItem,
	itemWidth = 300,
	itemGap = 16,
	scrollSpeed = 20,
}: InfiniteCarouselProps<T>) {
	const [duplicatedItems, setDuplicatedItems] = useState<T[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const controls = useAnimation();
	const isMobile = useIsMobile();

	useEffect(() => {
		setDuplicatedItems(isMobile ? items : [...items, ...items]);
	}, [items, isMobile]);

	useEffect(() => {
		if (isMobile) return;

		let lastTime = performance.now();
		let animationId: number;
		const totalWidth = duplicatedItems.length * (itemWidth + itemGap);

		const animate = (currentTime: number) => {
			const deltaTime = currentTime - lastTime;
			lastTime = currentTime;

			let newX = x.get() - (scrollSpeed * deltaTime) / 1000;
			if (newX <= -totalWidth / 2) {
				newX += totalWidth / 2;
			}
			x.set(newX);
			controls.set({ x: newX });
			animationId = requestAnimationFrame(animate);
		};

		animationId = requestAnimationFrame(animate);

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	}, [
		x,
		controls,
		duplicatedItems.length,
		itemWidth,
		itemGap,
		scrollSpeed,
		isMobile,
	]);

	return (
		<div
			className={`w-full ${isMobile ? "overflow-x-auto" : "overflow-hidden"}`}
			ref={containerRef}
		>
			<motion.div
				className="flex py-4"
				style={isMobile ? {} : { x }}
				animate={isMobile ? {} : controls}
			>
				{duplicatedItems.map((item, index) => (
					<motion.div
						key={`${nanoid()}-${index}`}
						className="flex-shrink-0"
						style={{ width: itemWidth, marginRight: itemGap }}
						whileHover={{ scale: isMobile ? 1 : 1.01 }}
					>
						{renderItem(item, index)}
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
