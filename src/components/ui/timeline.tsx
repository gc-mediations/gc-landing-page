import type { Landmark } from "@/types/landmark";
import { motion, useAnimation } from "framer-motion";
import { nanoid } from "nanoid";
import type React from "react";
import { useEffect, useRef } from "react";

interface TimelineProps {
	title: string;
	subtitle: string;
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

	useEffect(() => {
		const animateTimeline = async () => {
			await controls.start({
				x: 0,
				transition: { duration: 0.5 },
			});

			await controls.start((i) => ({
				opacity: 1,
				transition: { delay: i * 0.1, duration: 0.3 },
			}));

			if (containerRef.current && timelineRef.current) {
				const container = containerRef.current;
				const timeline = timelineRef.current;
				const lastLandmark = timeline.lastElementChild as HTMLElement;

				if (lastLandmark) {
					const scrollToX =
						lastLandmark.offsetLeft -
						container.offsetWidth / 2 +
						lastLandmark.offsetWidth / 2;
					container.scrollTo({ left: scrollToX, behavior: "smooth" });
				}
			}
		};

		animateTimeline();
	}, [controls]);

	return (
		<div className="w-full py-4 md:py-8">
			<div className="space-y-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
						{title}
					</h2>
					<p className="mt-2 text-muted-foreground md:text-xl">{subtitle}</p>
				</div>
				<div
					ref={containerRef}
					className="overflow-x-auto pb-4 relative"
					style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
				>
					<motion.div
						ref={timelineRef}
						className="flex space-x-8 px-4 py-4 after:content-[''] after:block after:w-[50vw] after:flex-shrink-0"
						style={{ minWidth: "max-content" }}
						initial={{ x: "100%" }}
						animate={controls}
					>
						{landmarks.map((landmark, index) => (
							<motion.div
								key={nanoid()}
								className="flex flex-col items-center gap-2 w-[400px] px-4 py-8 flex-shrink-0 bg-primary-foreground rounded-md shadow-md"
								initial={{ opacity: 0, scale: 1 }}
								animate={controls}
								custom={index}
								whileHover={{ scale: 1.1 }}
							>
								<div className="text-sm font-medium text-primary">
									{landmark.date}
								</div>
								<p className="text-3xl font-bold text-center">
									{landmark.title}
								</p>
								<p className="text-muted-foreground text-center">
									{landmark.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
