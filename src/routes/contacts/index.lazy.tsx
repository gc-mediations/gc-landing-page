import marker from "@/assets/images/marker.svg";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import { Combobox } from "@/components/ui/combobox.tsx";
import List from "@/components/ui/list.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { toast } from "@/hooks/use-toast.ts";
import { contacts } from "@/static-data/contacts.ts";
import { locations } from "@/static-data/locations.ts";
import { useMapStore } from "@/store/map-store.ts";
import type { Location } from "@/types/location.ts";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import { InfoIcon, MenuIcon } from "lucide-react";
import { useEffect } from "react";
import {
	MapContainer,
	Marker,
	TileLayer,
	Tooltip,
	useMap,
} from "react-leaflet";

export const Route = createLazyFileRoute("/contacts/")({
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

	const comboboxData = locations.map((location) => ({
		label: location.name,
		value: location.name,
		action: () => setCoordinates(location.coordinates),
	}));

	const handleCopy = async (text: string) => {
		await navigator.clipboard.writeText(text);
		toast({
			title: "Indirizzo copiato negli appunti",
		});
	};

	return (
		<motion.div
			initial={{ y: 300, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -100, opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="p-6 h-full"
		>
			<div className="relative h-full bg-primary-foreground rounded-md shadow-md">
				<div className="absolute top-3 left-16 z-[1000] w-64">
					<Combobox data={comboboxData} placeholder="Seleziona una sede" />
				</div>
				<div className="absolute top-4 right-4 z-[1000]">
					<Accordion type="single" collapsible className="w-64">
						<AccordionItem value="list" className="border-none">
							<AccordionTrigger className="py-2 px-4 bg-white rounded-t-md shadow-sm hover:bg-gray-50">
								<p className={"flex flex-row items-center gap-2"}>
									<MenuIcon size={14} />
									Contatti
								</p>
							</AccordionTrigger>
							<AccordionContent className="mt-1 bg-muted rounded-b-md shadow-lg p-8">
								<List data={contacts} />
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
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
							<Tooltip direction={"bottom"} className={"flex flex-col gap-2"}>
								<p>{location.address}</p> <Separator />
								<p
									className={
										"text-center font-semibold flex flex-row items-center gap-2 justify-center"
									}
								>
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
