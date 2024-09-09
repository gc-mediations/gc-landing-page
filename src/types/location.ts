import type { LatLngExpression } from "leaflet";

export type Location = {
	name: string;
	coordinates: LatLngExpression;
	address: string;
};
