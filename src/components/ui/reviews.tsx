import { Card, CardContent } from "@/components/ui/card";
import { InfiniteCarousel } from "@/components/ui/infinite-carousel.tsx";
import { reviews } from "@/static-data/reviews";
import type { Review } from "@/types/review";

export default function Reviews() {
	const renderReview = (review: Review) => (
		<Card className="h-64 transition-shadow duration-300 hover:shadow-lg">
			<CardContent className="flex flex-col h-full p-6">
				<h3 className="text-lg font-semibold mb-2">{review.title}</h3>
				<div className="flex-grow overflow-y-auto">
					<p className="text-sm text-muted-foreground">{review.description}</p>
				</div>
			</CardContent>
		</Card>
	);

	return (
		<div className="w-full max-w-full mx-auto py-4">
			<InfiniteCarousel items={reviews} renderItem={renderReview} />
		</div>
	);
}
