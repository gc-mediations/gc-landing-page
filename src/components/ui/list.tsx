import { toast } from "@/hooks/use-toast.ts";
import { Copy } from "lucide-react";
import { nanoid } from "nanoid";

interface ListProps {
	data: { title: string; content: string }[];
}

export default function List({ data }: ListProps) {
	const handleCopy = async (title: string, text: string) => {
		await navigator.clipboard.writeText(text);
		toast({
			title: `${title} copiato/a!`,
		});
	};

	return (
		<div className="space-y-6">
			{data?.map((item) => (
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
							"absolute -top-1 -right-1 transition-opacity duration-300 ease-in-out"
						}
					>
						<Copy size={16} />
					</div>
				</div>
			))}
		</div>
	);
}
