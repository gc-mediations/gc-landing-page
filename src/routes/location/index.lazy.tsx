import marker from "@/assets/icons/marker.svg";
import { Combobox } from "@/components/ui/combobox";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-is-mobile.ts";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { locations } from "@/static-data/locations";
import { useMapStore } from "@/store/map-store";
import type { Location } from "@/types/location";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import { InfoIcon, MapIcon } from "lucide-react";
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
		try {
			await navigator.clipboard.writeText(text);
			toast({
				title: "Copiato negli appunti!",
				className: "zIndex-1000",
			});
		} catch (error) {
			toast({
				title: "Errore durante la copia negli appunti",
				description: String(error),
			});
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="px-4 pb-2 h-full relative z-0"
		>
			<div
				className={
					"p-8 bg-card rounded-md hover:shadow-md transition-shadow ease-in-out w-full h-full mt-2"
				}
			>
				<div
					className={cn(
						"absolute bottom-[55px] left-[290px] transform -translate-x-1/2 z-[1001] w-full max-w-md pointer-events-none",
						isMobile ? "hidden" : "block",
					)}
				>
					<div className="bg-white rounded-lg shadow-lg px-2 py-4 text-center pointer-events-auto">
						<p className="font-bold text-2xl mb-1 flex flex-row justify-center items-center gap-2">
							<MapIcon /> Scegli la sede
						</p>
						<p className="text-muted-foreground text-sm">
							Lavoro in più località. Scegli la sede più vicina a te.
						</p>
					</div>
				</div>

				<div className="relative h-full bg-primary-foreground rounded-md shadow-md">
					{!isMobile && (
						<>
							<div className="absolute top-3 left-16 z-[1000] w-64">
								<Combobox
									data={comboboxData}
									placeholder="Seleziona una sede"
								/>
							</div>
						</>
					)}

					<MapContainer
						className="h-full w-full rounded-md z-0"
						center={coordinates}
						zoom={13}
						scrollWheelZoom
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							className={"z-0"}
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
									<p>{location.address}</p>
									{!isMobile && (
										<>
											<Separator />
											<p className="text-center font-semibold flex flex-row items-center gap-2 justify-center">
												<InfoIcon size={14} />
												Clicca l'icona per copiare l'indirizzo
											</p>
										</>
									)}
								</Tooltip>
							</Marker>
						))}
						<MapController center={coordinates} />
					</MapContainer>
				</div>
			</div>
		</motion.div>
	);
}

export default Contacts;
