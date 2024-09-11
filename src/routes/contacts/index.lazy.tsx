import { Combobox } from "@/components/ui/combobox.tsx";
import List from "@/components/ui/list.tsx";
import { contacts } from "@/static-data/contacts.ts";
import { locations } from "@/static-data/locations.ts";
import { useMapStore } from "@/store/map-store.ts";
import type { Location } from "@/types/location.ts";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

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

	return (
		<motion.div
			initial={{ y: 300, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -100, opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="p-4 h-[calc(90vh-2rem)]"
		>
			<div className="flex gap-4 h-[600px]">
				<div className="w-2/3 bg-primary-foreground rounded-md px-4 relative shadow-sm flex flex-col pb-4">
					<p className="text-lg font-semibold py-2">Sedi lavorative</p>
					<div className="absolute top-14 left-20 z-[1000] w-64">
						<Combobox data={comboboxData} placeholder="Seleziona una sede" />
					</div>
					<div className="flex-grow overflow-hidden">
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
								<Marker key={location.name} position={location.coordinates}>
									<Popup>{location.address}</Popup>
								</Marker>
							))}
							<MapController center={coordinates} />
						</MapContainer>
					</div>
				</div>
				<div className="w-1/3 bg-primary-foreground rounded-md px-4 shadow-sm flex flex-col">
					<p className="text-lg font-semibold py-2">Contatti</p>
					<div className="flex-grow overflow-auto">
						<List data={contacts} />
					</div>
				</div>
			</div>
		</motion.div>
	);
}
