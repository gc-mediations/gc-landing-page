import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/static-data/reviews.ts";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

export default function Reviews() {
	return (
		<Carousel
			className="w-full max-w-4xl mx-auto"
			opts={{ loop: true }}
			plugins={[
				Autoplay({
					delay: 3000,
				}),
			]}
		>
			<CarouselContent className="-ml-2 -mr-2 py-4">
				{reviews.map((review) => (
					<CarouselItem
						className="sm:basis-1 lg:basis-1/2 pl-2 pr-2 pb-4"
						key={nanoid()}
					>
						<motion.div
							transition={{ duration: 1.0 }}
							whileHover={{ scale: 1.01 }}
						>
							<Card className="h-64 transition-shadow duration-300 hover:shadow-lg">
								<CardContent className="flex flex-col h-full p-6">
									<h3 className="text-lg font-semibold mb-2">{review.title}</h3>
									<div className="flex-grow overflow-y-auto">
										<p className="text-sm text-muted-foreground">
											{review.description}
										</p>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
