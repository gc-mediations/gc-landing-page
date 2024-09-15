import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";

interface ImageCollageProps {
	images: string[];
	columns?: number;
}

const ResizableCollage = ({ images, columns = 3 }: ImageCollageProps) => {
	const [selectedImage, setSelectedImage] = useState<string | null>("");
	const isMobile = useIsMobile();

	const rows = Math.ceil(images.length / columns);
	const imageGrid = useMemo(
		() =>
			Array.from({ length: rows }, (_, rowIndex) =>
				images.slice(rowIndex * columns, (rowIndex + 1) * columns),
			),
		[images, columns, rows],
	);

	const randomSizes = useMemo(() => {
		const generateRandomSizes = (count: number) => {
			const sizes = Array.from(
				{ length: count },
				() => Math.random() * 50 + 50,
			);
			const total = sizes.reduce((sum, size) => sum + size, 0);
			return sizes.map((size) => (size / total) * 100);
		};

		return {
			rows: generateRandomSizes(rows),
			columns: Array.from({ length: rows }, () => generateRandomSizes(columns)),
		};
	}, [rows, columns]);

	return (
		<ResizablePanelGroup
			direction="vertical"
			className={cn(
				isMobile ? "min-h-[190vh]" : "min-h-[100vh]",
				"rounded-md hover:shadow-lg shadow-md transition-all ease-in-out",
			)}
		>
			{imageGrid.map((row, rowIndex) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<React.Fragment key={rowIndex}>
					{rowIndex > 0 && <ResizableHandle />}
					<ResizablePanel defaultSize={randomSizes.rows[rowIndex]} minSize={10}>
						<ResizablePanelGroup
							direction={isMobile ? "vertical" : "horizontal"}
						>
							{row.map((image, colIndex) => (
								<React.Fragment
									key={`${rowIndex}-${
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										colIndex
									}`}
								>
									{colIndex > 0 && <ResizableHandle />}
									<ResizablePanel
										defaultSize={randomSizes.columns[rowIndex][colIndex]}
										minSize={10}
									>
										<Dialog>
											<DialogTrigger asChild>
												<motion.div
													initial={{ opacity: 0 }}
													whileInView={{ opacity: 1 }}
													viewport={{ once: true }}
													transition={{ duration: 0.5 }}
													className="w-full h-full"
												>
													<motion.img
														src={image}
														alt={`${rowIndex * columns + colIndex + 1}`}
														className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-all ease-in-out"
														onClick={() => setSelectedImage(image)}
														whileHover={{ scale: 1.05 }}
														transition={{ type: "spring", stiffness: 300 }}
													/>
												</motion.div>
											</DialogTrigger>
											<DialogContent
												className={cn(
													isMobile ? "max-w-[375px]" : "max-w-[750px]",
													"rounded-md",
												)}
											>
												<motion.div
													className="relative"
													initial={{ opacity: 0, scale: 0.8 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{ duration: 0.3 }}
												>
													<motion.img
														src={selectedImage || ""}
														alt="Selected"
														className="w-full h-auto max-h-[100vh] object-contain rounded-lg"
														layoutId={selectedImage}
													/>
												</motion.div>
											</DialogContent>
										</Dialog>
									</ResizablePanel>
								</React.Fragment>
							))}
						</ResizablePanelGroup>
					</ResizablePanel>
				</React.Fragment>
			))}
		</ResizablePanelGroup>
	);
};

export default ResizableCollage;
