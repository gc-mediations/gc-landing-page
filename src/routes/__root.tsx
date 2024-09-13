import { Footer } from "@/components/ui/footer.tsx";
import { Header } from "@/components/ui/header.tsx";
import { Toaster } from "@/components/ui/toaster";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createRootRoute({
	component: () => (
		<div className="h-screen flex flex-col">
			<Header />
			<main className="flex-1 w-full overflow-auto px-4 py-4 ">
				<AnimatePresence>
					<motion.div
						transition={{ duration: 1.0 }}
						whileHover={{ scale: 1.001 }}
						className="bg-muted rounded-md px-8 h-full overflow-auto shadow-md"
					>
						<Outlet />
					</motion.div>{" "}
				</AnimatePresence>
			</main>
			<Footer />
			<Toaster />
			<TanStackRouterDevtools />
		</div>
	),
});
