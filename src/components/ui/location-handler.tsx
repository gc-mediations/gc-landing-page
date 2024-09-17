import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MapPinIcon } from "lucide-react";
import type React from "react";

interface MobileLocationButtonsProps {
	comboboxData: { label: string; value: string; action: () => void }[];
}

export const LocationHandler: React.FC<MobileLocationButtonsProps> = ({
	comboboxData,
}) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className={"h-14"} asChild>
				<Button
					variant="outline"
					className="shadow-lg text-md gap-2 rounded-l-md rounded-r-none"
				>
					<MapPinIcon />
					Sedi
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent side="top" align="start" className="w-56 z-[1005]">
				{comboboxData.map((item) => (
					<DropdownMenuItem key={item.value} onSelect={item.action}>
						{item.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
