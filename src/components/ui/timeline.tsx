import type { Landmark } from "@/types/landmark.ts";
import { nanoid } from "nanoid";
import type React from "react";

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
	const chunkLandmarks = (arr: Landmark[], size: number) => {
		return Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
			arr.slice(i * size, i * size + size),
		);
	};

	const landmarkPairs = chunkLandmarks(landmarks, 2);

	return (
		<div className="w-full max-w-3xl mx-auto py-12 md:py-16">
			<div className="space-y-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
						{title}
					</h2>
					<p className="mt-2 text-muted-foreground md:text-xl">{subtitle}</p>
				</div>
				<div className="space-y-8">
					{landmarkPairs.map((pair) => (
						<div
							key={nanoid()}
							className="grid gap-8 sm:grid-cols-2 sm:gap-x-12"
						>
							{pair.map((landmark) => (
								<div key={nanoid()} className="flex flex-col items-start gap-2">
									<div className="text-sm font-medium text-primary">
										{landmark.date}
									</div>
									<h3 className="text-xl font-bold">{landmark.title}</h3>
									<p className="text-muted-foreground">
										{landmark.description}
									</p>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
