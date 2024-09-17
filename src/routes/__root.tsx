import { Footer } from "@/components/ui/footer.tsx";
import { Header } from "@/components/ui/header.tsx";
import { Toaster } from "@/components/ui/toaster";
import { useIsMobile } from "@/hooks/use-is-mobile.ts";
import { cn } from "@/lib/utils.ts";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createRootRoute({
	component: () => {
		const isMobile = useIsMobile();

		return (
			<div className="h-screen flex flex-col">
				<Header />
				<main
					className={cn(
						"flex-1 w-full overflow-auto",
						isMobile ? "pb-8" : "p-4",
					)}
				>
					<AnimatePresence>
						<motion.div
							transition={{ duration: 1.0 }}
							whileHover={{ scale: 1.001 }}
							className={cn(
								"bg-muted rounded-md h-full overflow-auto shadow-md",
								isMobile ? "px-2" : "px-8",
							)}
						>
							<Outlet />
						</motion.div>
					</AnimatePresence>
				</main>
				<Footer />
				<Toaster />
			</div>
		);
	},
});
