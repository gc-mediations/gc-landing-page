import { Footer } from "@/components/ui/footer.tsx";
import { Header } from "@/components/ui/header.tsx";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => (
		<div className="min-h-screen flex flex-col w-full">
			<Header />
			<main className="flex-grow w-full px-4 py-8">
				<Outlet />
			</main>
			<Footer />
			<TanStackRouterDevtools />
		</div>
	),
});
