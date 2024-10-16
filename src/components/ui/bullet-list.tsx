interface BulletListProps {
	items: { title: string; description: string }[];
}

const BulletList = ({ items }: BulletListProps) => {
	return (
		<ul className="list-disc pl-5 space-y-2 w-full">
			{items.map((item, index) => (
				<li key={index} className="text-gray-700">
					<span className="font-semibold">{item.title}: </span>
					<span>{item.description}</span>
				</li>
			))}
		</ul>
	);
};

export default BulletList;
