import type { Location } from "@/types/location.ts";
import type { LatLngExpression } from "leaflet";

export const locations: Location[] = [
	{
		name: "Catania",
		coordinates: [37.515832284824896, 15.077880215746394] as LatLngExpression,
		address: "REMAX Platinum: Via Cesare Beccaria, 67, 95123 Catania CT",
	},
	{
		name: "Messina",
		coordinates: [38.193813, 15.554015] as LatLngExpression,
		address: "Messina Office Address",
	},
	{
		name: "Siracusa",
		coordinates: [37.075474, 15.286582] as LatLngExpression,
		address: "Siracusa Office Address",
	},
	{
		name: "Ragusa",
		coordinates: [36.925092, 14.724319] as LatLngExpression,
		address: "Ragusa Office Address",
	},
	{
		name: "Agrigento",
		coordinates: [37.309236, 13.576745] as LatLngExpression,
		address: "Agrigento Office Address",
	},
	{
		name: "Caltanissetta",
		coordinates: [37.492591, 14.063187] as LatLngExpression,
		address: "Caltanissetta Office Address",
	},
	{
		name: "Enna",
		coordinates: [37.567317, 14.27907] as LatLngExpression,
		address: "Enna Office Address",
	},
	{
		name: "Palermo",
		coordinates: [38.115688, 13.361267] as LatLngExpression,
		address: "Palermo Office Address",
	},
];
