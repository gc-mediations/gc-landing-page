import { Timeline } from "@/components/ui/timeline.tsx";
import { landmarks } from "@/static-data/landmarks.ts";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about/")({
	component: About,
});

function About() {
	return (
		<Timeline
			title={"In sintesi"}
			subtitle={"La mia storia"}
			landmarks={landmarks}
		/>
	);
}
