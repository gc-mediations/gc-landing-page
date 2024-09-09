import type { LatLngExpression } from "leaflet";
import { create } from "zustand";

export type MapStore = {
	coordinates: LatLngExpression;
	setCoordinates: (coordinates: LatLngExpression) => void;
};

export const useMapStore = create<MapStore>((set) => ({
	coordinates: [37.515832284824896, 15.077880215746394] as LatLngExpression,
	setCoordinates: (coordinates: LatLngExpression) => set({ coordinates }),
}));
