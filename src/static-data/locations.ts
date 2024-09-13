import type { Location } from "@/types/location.ts";
import type { LatLngExpression } from "leaflet";

export const locations: Location[] = [
	{
		name: "Catania",
		coordinates: [37.515832284824896, 15.077880215746394] as LatLngExpression,
		address: "REMAX Platinum: Via Cesare Beccaria, 67, 95123 Catania CT",
	},
	{
		name: "Paternò",
		coordinates: [37.5666, 14.9] as LatLngExpression,
		address: "Parco Europa 35, 95047 Paternò CT",
	},
	{
		name: "Acireale",
		coordinates: [37.6116, 15.1666] as LatLngExpression,
		address: "Corso Savoia 166, 95024 Acireale CT",
	},
	{
		name: "San Giovanni La Punta",
		coordinates: [37.5833, 15.1] as LatLngExpression,
		address: "Via D. D'Aosta 29, 95037 San Giovanni La Punta CT",
	},
	{
		name: "Caltagirone",
		coordinates: [37.2333, 14.5167] as LatLngExpression,
		address: "Via M. della Via 19, 95041 Caltagirone CT",
	},
];
