import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const Route = createLazyFileRoute("/contacts/")({
	component: Contacts,
});

function Contacts() {
	return (
		<motion.div
			className={"flex flex-col justify-center"}
			whileHover={{ scale: 1.01 }}
		>
			<MapContainer
				className={"h-[600px] w-auto justify-center px-2"}
				center={[37.515832284824896, 15.077880215746394]}
				zoom={13}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[37.515832284824896, 15.077880215746394]}>
					<Popup>
						REMAX Platinum: Via Cesare Beccaria, 67, 95123 Catania CT
					</Popup>
				</Marker>
			</MapContainer>
		</motion.div>
	);
}
