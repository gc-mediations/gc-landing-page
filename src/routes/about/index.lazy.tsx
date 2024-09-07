import { Timeline } from "@/components/ui/timeline.tsx";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about/")({
	component: About,
});

function About() {
	return <Timeline />;
}
