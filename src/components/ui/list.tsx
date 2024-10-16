import { toast } from "@/hooks/use-toast.ts";
import { motion } from "framer-motion";
import { CopyIcon } from "lucide-react";
import { nanoid } from "nanoid";

interface ListProps {
	data: { title: string; content: string }[];
}

export default function List({ data }: ListProps) {
	const handleCopy = async (title: string, text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			toast({
				title: `${title} copiato/a!`,
			});
		} catch (error) {
			toast({
				title: "Errore durante la copia negli appunti",
				description: String(error),
			});
		}
	};

	return (
		<motion.div className="space-y-3">
			{data?.map((item) => (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div
					key={nanoid()}
					className={
						"relative group rounded-md bg-card p-2 shadow-sm transition-all ease-in-out hover:cursor-pointer hover:scale-105 hover:shadow-lg"
					}
					onClick={() => handleCopy(item.title, item.content)}
				>
					<div className="flex items-center justify-between gap-2">
						<div className="flex-1 overflow-hidden">
							<h4 className="text-sm font-medium truncate">{item.title}</h4>
							<p className="text-xs text-muted-foreground truncate">
								{item.content}
							</p>
						</div>
					</div>
					<div
						className={
							"absolute -top-1 -right-1 transition-opacity bg-black rounded-full duration-300 p-1 ease-in-out"
						}
					>
						<CopyIcon color={"white"} size={10} />
					</div>
				</div>
			))}
		</motion.div>
	);
}
