import { Combobox } from "@/components/ui/combobox.tsx";
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
			className={"p-4"}
		>
			<Combobox data={comboboxData} placeholder="Seleziona una sede" />
			<div className="flex flex-col justify-center pt-2">
				<MapContainer
					className="h-[600px] w-auto justify-center rounded-md"
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
		</motion.div>
	);
}
