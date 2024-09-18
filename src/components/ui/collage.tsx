import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { useMemo, useState } from "react";

interface CollageProps {
	images: string[];
	columns?: number;
}

const Collage = ({ images, columns = 3 }: CollageProps) => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const isMobile = useIsMobile();

	const gridItems = useMemo(() => {
		const items: { image: string; width: number; aspectRatio: number }[][] = [];
		let currentRow: { image: string; width: number; aspectRatio: number }[] =
			[];
		let currentRowWidth = 0;

		images.forEach((image, index) => {
			const width = Math.floor(Math.random() * 2) + 1;
			const aspectRatio = Math.random() * 0.5 + 0.75;
			if (currentRowWidth + width > columns) {
				items.push(currentRow);
				currentRow = [];
				currentRowWidth = 0;
			}
			currentRow.push({ image, width, aspectRatio });
			currentRowWidth += width;

			if (index === images.length - 1 && currentRow.length > 0) {
				items.push(currentRow);
			}
		});

		return items;
	}, [images, columns]);

	return (
		<div className="container mx-auto px-8 pb-8 pt-2">
			{gridItems.map((row, rowIndex) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<div key={rowIndex} className="flex mb-4">
					{row.map(({ image, width, aspectRatio }, colIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Dialog key={colIndex}>
							<DialogTrigger asChild>
								<div
									className={cn(
										"cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mr-4 last:mr-0",
										`w-${width}/${columns}`,
									)}
									style={{ aspectRatio }}
								>
									{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
									<img
										src={image}
										alt={`Gallery ${nanoid()}`}
										className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
										onClick={() => setSelectedImage(image)}
									/>
								</div>
							</DialogTrigger>
							<DialogContent
								className={cn(isMobile ? "max-w-sm" : "max-w-3xl")}
							>
								<div className="relative" style={{ aspectRatio }}>
									<img
										src={selectedImage || ""}
										alt="Selected"
										className="w-full h-full object-contain rounded-lg"
									/>
								</div>
							</DialogContent>
						</Dialog>
					))}
				</div>
			))}
		</div>
	);
};

export default Collage;
