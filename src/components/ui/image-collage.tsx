import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import React, { useState } from "react";

interface ImageCollageProps {
	images: string[];
	columns?: number;
}

const ImageCollage = ({ images, columns = 3 }: ImageCollageProps) => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const rows = Math.ceil(images.length / columns);
	const imageGrid = Array.from({ length: rows }, (_, rowIndex) =>
		images.slice(rowIndex * columns, (rowIndex + 1) * columns),
	);

	return (
		<ResizablePanelGroup
			direction="vertical"
			className="min-h-[100vh] rounded-md"
		>
			{imageGrid.map((row, rowIndex) => (
				<React.Fragment key={rowIndex}>
					{rowIndex > 0 && <ResizableHandle />}
					<ResizablePanel defaultSize={100 / rows} minSize={10}>
						<ResizablePanelGroup direction="horizontal">
							{row.map((image, colIndex) => (
								<React.Fragment key={`${rowIndex}-${colIndex}`}>
									{colIndex > 0 && <ResizableHandle />}
									<ResizablePanel defaultSize={100 / columns} minSize={10}>
										<Dialog>
											<DialogTrigger asChild>
												<img
													src={image}
													alt={`Image ${rowIndex * columns + colIndex + 1}`}
													className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
													onClick={() => setSelectedImage(image)}
												/>
											</DialogTrigger>
											<DialogContent className="sm:max-w-[425px]">
												<div className="relative">
													<img
														src={selectedImage || ""}
														alt="Selected"
														className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
													/>
												</div>
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

export default ImageCollage;
