import { nanoid } from "nanoid";

interface ListProps {
	data: { title: string; content: string }[];
}

export default function List({ data }: ListProps) {
	return (
		<div className="space-y-4">
			{data?.map((item) => (
				<div
					key={nanoid()}
					className="flex items-start gap-4 rounded-md bg-card p-4 shadow-sm"
				>
					<div className="flex-1 space-y-1">
						<h4 className="text-lg font-medium">{item.title}</h4>
						<p className="text-muted-foreground">{item.content}</p>
					</div>
				</div>
			))}
		</div>
	);
}
