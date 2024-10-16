import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckIcon, DotIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";

interface LocationDropdownProps {
	comboboxData: { label: string; value: string; action: () => void }[];
}

const LocationDropdown = ({ comboboxData }: LocationDropdownProps) => {
	const [selectedItem, setSelectedItem] = useState<string>();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className={"h-14"} asChild>
				<Button
					variant="default"
					className="shadow-xl text-md gap-2 rounded-l-md rounded-r-none border-r-white"
				>
					<MapPinIcon />
					Sedi
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent side="top" align="end" className="w-56 z-[1005]">
				{comboboxData.map((item) => (
					<DropdownMenuItem
						key={item.value}
						onSelect={() => {
							setSelectedItem(item.value);
							item.action();
						}}
						className="flex items-center gap-2"
					>
						{" "}
						{selectedItem === item.value ? (
							<CheckIcon className="h-4 w-4" />
						) : (
							<DotIcon className="h-4 w-4" />
						)}
						<span>{item.label}</span>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LocationDropdown;
