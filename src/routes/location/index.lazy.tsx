import marker from "@/assets/icons/marker.svg";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import List from "@/components/ui/list";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-is-mobile.ts";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { contacts } from "@/static-data/contacts";
import { locations } from "@/static-data/locations";
import { useMapStore } from "@/store/map-store";
import type { Location } from "@/types/location";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import { InfoIcon, MapPinIcon, MenuIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import {
	MapContainer,
	Marker,
	TileLayer,
	Tooltip,
	useMap,
} from "react-leaflet";

export const Route = createLazyFileRoute("/location/")({
	component: Contacts,
});

function MapController({ center }: { center: LatLngExpression }) {
	const map = useMap();

	useEffect(() => {
		map.setView(center, 13);
	}, [center, map]);

	return null;
}

function Contacts() {
	const { coordinates, setCoordinates } = useMapStore();
	const isMobile = useIsMobile();

	const comboboxData = locations.map((location) => ({
		label: location.name,
		value: location.name,
		action: () => setCoordinates(location.coordinates),
	}));

	const handleCopy = async (text: string) => {
		await navigator.clipboard.writeText(text);
		toast({
			title: "Indirizzo copiato negli appunti",
			className: "zIndex-1000",
		});
	};

	return (
		<motion.div
			initial={{ y: 300, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -100, opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="px-4 py-4 h-full relative"
		>
			<div
				className={cn(
					"absolute lg:top-8 sm:bottom-8 md:bottom-8 left-1/2 transform -translate-x-1/2 z-[1001] w-full max-w-lg pointer-events-none",
					isMobile ? "hidden" : "block",
				)}
			>
				<div className="bg-white rounded-lg shadow-lg px-2 py-4 text-center pointer-events-auto">
					<p className="font-bold text-2xl mb-1">Quale ufficio preferisci?</p>
					<p className="text-muted-foreground text-sm">
						Più sedi disponibili. Flessibilità e dinamicità garantite.
					</p>
				</div>
			</div>

			<div className="relative h-full bg-primary-foreground rounded-md shadow-md">
				{!isMobile && (
					<>
						<div className="absolute top-3 left-16 z-[1000] w-64">
							<Combobox data={comboboxData} placeholder="Seleziona una sede" />
						</div>
						<div className="absolute top-4 right-4 z-[1000]">
							<Accordion type="single" collapsible className="w-64">
								<AccordionItem value="list" className="border-none">
									<AccordionTrigger className="py-2 px-4 bg-white rounded-t-md shadow-sm hover:bg-gray-50">
										<p className="flex flex-row items-center gap-2">
											<MenuIcon size={14} />
											Contatti
										</p>
									</AccordionTrigger>
									<AccordionContent className="mt-1 bg-muted rounded-md shadow-lg p-8">
										<List data={contacts} />
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</>
				)}

				{isMobile && (
					<div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 z-[1000] flex space-x-2">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="secondary">
									<MapPinIcon className="mr-2 h-4 w-4" />
									Sedi
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								side={"top"}
								align={"center"}
								className="w-56 z-[1005]"
							>
								{comboboxData.map((item) => (
									<DropdownMenuItem key={item.value} onSelect={item.action}>
										{item.label}
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="secondary">
									<MenuIcon className="mr-2 h-4 w-4" />
									Contatti
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								side={"top"}
								align={"center"}
								className="w-56 z-[1005]"
							>
								<DropdownMenuItem className={"py-4"} key={nanoid()}>
									<List data={contacts} />
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				)}

				<MapContainer
					className="h-full w-full rounded-md"
					center={coordinates}
					zoom={13}
					scrollWheelZoom
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{locations.map((location: Location) => (
						<Marker
							eventHandlers={{
								click: async () => await handleCopy(location.address),
							}}
							icon={L.icon({
								iconUrl: marker,
								iconSize: [32, 32],
								iconAnchor: [16, 32],
								popupAnchor: [0, -32],
							})}
							key={location.name}
							position={location.coordinates}
						>
							<Tooltip direction="bottom" className="flex flex-col gap-2">
								<p>{location.address}</p> <Separator />
								<p className="text-center font-semibold flex flex-row items-center gap-2 justify-center">
									<InfoIcon size={14} />
									Clicca l'icona per copiare l'indirizzo
								</p>
							</Tooltip>
						</Marker>
					))}
					<MapController center={coordinates} />
				</MapContainer>
			</div>
		</motion.div>
	);
}

export default Contacts;
