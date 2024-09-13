import max from "@/assets/logos/24max.svg";
import auxilia from "@/assets/logos/auxilia.webp";
import barclays from "@/assets/logos/barclays.svg";
import credipass from "@/assets/logos/credipass.svg";
import money360 from "@/assets/logos/money360.png";
import sdl from "@/assets/logos/sdl.png";
import type { Landmark } from "@/types/landmark.ts";

export const landmarks: Landmark[] = [
	{
		date: "2008 - 2013",
		title: "Barclays",
		logo: barclays,
		description: "Agente in attività finanziaria",
	},
	{
		date: "2014 - 2015",
		title: "Money360",
		logo: money360,
		description: "Mediatore creditizio in collaborazione",
	},
	{
		date: "2014 - 2019",
		title: "SDL Centro Studi",
		logo: sdl,
		description: "Responsabile aziendale junior",
	},
	{
		date: "2016 - 2017",
		title: "Credipass",
		logo: credipass,
		description: "Family broker",
	},
	{
		date: "2017 - 2020",
		title: "Auxilia Finance",
		logo: auxilia,
		description: "Consulente per servizi finanziari",
	},
	{
		date: "2020 - Oggi",
		title: "24Max",
		logo: max,
		description: "Credit Sales Specialist",
	},
];
