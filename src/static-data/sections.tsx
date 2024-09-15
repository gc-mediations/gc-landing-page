import { HomeIcon, LocateIcon, MessageCircleQuestionIcon } from "lucide-react";
import type { Section } from "../types/section.ts";

export const sections: Section[] = [
	{ label: "Home", link: "/", icon: <HomeIcon size={14} /> },
	{
		label: "Chi sono",
		link: "/about",
		icon: <MessageCircleQuestionIcon size={14} />,
	},
	{ label: "Dove trovarmi", link: "/location", icon: <LocateIcon size={14} /> },
];
