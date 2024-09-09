import {Footer} from "@/components/ui/footer.tsx";
import {Header} from "@/components/ui/header.tsx";
import {createRootRoute, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import {motion} from "framer-motion";

export const Route = createRootRoute({
	component: () => (
		<div className="h-screen flex flex-col">
			<Header />
			<main className="flex-1 w-full overflow-auto px-8 py-4">
				<motion.div
					transition={{ duration: 1.0 }}
					whileHover={{ scale: 1.01 }}
					className="bg-muted rounded-md px-8 h-full overflow-auto"
				>
					<Outlet />
				</motion.div>
			</main>
			<Footer />
			<TanStackRouterDevtools />
		</div>
	),
});
