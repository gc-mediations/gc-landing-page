import Reviews from "@/components/ui/reviews.tsx";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/feedback/")({
	component: Feedback,
});

function Feedback() {
	return <Reviews />;
}
