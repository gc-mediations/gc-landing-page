import type {Landmark} from "@/types/landmark";
import {motion, useAnimation} from "framer-motion";
import {ArrowRight, ChevronLeft, ChevronRight} from "lucide-react";
import {nanoid} from "nanoid";
import type React from "react";
import {useEffect, useRef} from "react";

interface TimelineProps {
	title?: string;
	subtitle?: string;
	landmarks: Landmark[];
}

export const Timeline: React.FC<TimelineProps> = ({
	title,
	subtitle,
	landmarks,
}) => {
	const controls = useAnimation();
	const containerRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<HTMLDivElement>(null);

	const scrollTimeline = (direction: "left" | "right") => {
		if (containerRef.current) {
			const container = containerRef.current;
			const scrollAmount = container.clientWidth * 0.8;
			let newScrollPosition =
				direction === "left"
					? container.scrollLeft - scrollAmount
					: container.scrollLeft + scrollAmount;

			newScrollPosition = Math.max(
				0,
				Math.min(
					newScrollPosition,
					container.scrollWidth - container.clientWidth,
				),
			);

			container.scrollTo({
				left: newScrollPosition,
				behavior: "smooth",
			});
		}
	};

	useEffect(() => {
		const animateTimeline = async () => {
			if (containerRef.current && timelineRef.current) {
				const container = containerRef.current;
				const timeline = timelineRef.current;
				const lastLandmark = timeline.lastElementChild as HTMLElement;

				if (lastLandmark) {
					const containerWidth = container.clientWidth;
					const lastLandmarkWidth = lastLandmark.offsetWidth;
					const timelineWidth = timeline.scrollWidth;

					const scrollToX =
						timelineWidth - containerWidth / 2 - lastLandmarkWidth / 2;

					await controls.start({
						x: [containerWidth, -scrollToX],
						transition: {
							duration: 1.0,
							ease: "easeInOut",
						},
					});

					container.scrollLeft = scrollToX;

					controls.set({ x: 0 });

					await controls.start((i) => ({
						opacity: 1,
						transition: { delay: i * 0.1, duration: 0.3 },
					}));
				}
			}
		};

		animateTimeline();
	}, [controls]);

	return (
		<div className="w-full py-4 md:py-8">
			<div className="space-y-8">
				<div className="text-center">
					{title && (
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
							{title}
						</h2>
					)}
					{subtitle && (
						<p className="mt-2 text-muted-foreground md:text-xl">{subtitle}</p>
					)}
				</div>

				<div className="relative">
					<div
						ref={containerRef}
						className="overflow-x-auto pb-4 relative items-center"
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
					>
						<motion.div
							ref={timelineRef}
							className="flex items-center space-x-8 px-4 py-4 after:content-[''] after:block after:w-[5vw] after:flex-shrink-0"
							style={{ minWidth: "max-content" }}
							animate={controls}
						>
							{landmarks.map((landmark, index) => (
								<div className={"flex flex-row items-center"} key={nanoid()}>
									<motion.div
										className="flex flex-col items-center gap-2 w-[500px] px-4 py-12 flex-shrink-0 bg-primary-foreground rounded-md shadow-md relative"
										initial={{ opacity: 0, scale: 1 }}
										animate={controls}
										custom={index}
										whileHover={{ scale: 1.01 }}
									>
										<div className="text-sm font-medium text-primary">
											{landmark.date}
										</div>
										<p className="text-4xl font-bold text-center">
											{landmark.title}
										</p>
										<p className="text-muted-foreground text-center">
											{landmark.description}
										</p>
									</motion.div>
									{index < landmarks.length - 1 && (
										<motion.div
											initial={{ opacity: 0, scale: 1 }}
											animate={controls}
											custom={index}
											className="flex-shrink-0 ml-8"
										>
											<ArrowRight size={24} className="text-primary" />
										</motion.div>
									)}
								</div>
							))}
						</motion.div>
					</div>

					<button
						type={"button"}
						onClick={() => scrollTimeline("left")}
						className="absolute left-2 top-[115px] transform -translate-y-1/2 bg-white p-2 rounded-md shadow-md z-10"
						aria-label="Scroll left"
					>
						<ChevronLeft size={24} />
					</button>

					<button
						type={"button"}
						onClick={() => scrollTimeline("right")}
						className="absolute right-2 top-[115px] transform -translate-y-1/2 bg-white p-2 rounded-md shadow-md z-10"
						aria-label="Scroll right"
					>
						<ChevronRight size={24} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
