import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils.ts";
import { sections } from "@/static-data/sections.ts";
import { Link, useLocation } from "@tanstack/react-router";
import { GlassesIcon, MenuIcon } from "lucide-react";

export const Header = () => {
	const location = useLocation();

	return (
		<header className="flex items-center justify-between bg-background px-4 py-3 shadow-sm md:px-6 md:py-4">
			<Link to={"/"} className="text-lg font-bold">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					fill="#000000"
					version="1.1"
					id="Capa_1"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 532.065 532.065"
					stroke="#000000"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0" />
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<g>
							{" "}
							<path d="M79.883,147.265c0,7.8,8,14.8,9.4,22.3c1.5,7.6-3.1,17-0.3,24.2c2.9,7.2,12.8,10.8,16.9,17.2c4,6.5,2.9,16.9,8.1,22.8 c4.8,5.5,14.6,5.9,20.7,10.4c1.3,1.6,2.7,3,4.1,4.4c3.6,5.3,5.9,12.4,11.2,15.7c1.8,1.1,3.8,1.7,5.9,2.1 c17.8,49.801,57.6,98.601,110.2,98.601c55.1,0,96.1-53.4,112.6-105.601c0.6-0.8,1-1.6,1.5-2.4c8.3-3.1,15.8-9.5,21.3-18.1 c3.2-1.2,6.3-2.6,8.4-5c5.199-5.8,4-16.4,8.1-22.8c4.1-6.6,14.1-10.2,16.9-17.4c2.899-7.2-1.801-16.6-0.301-24.2 c1.5-7.5,9.4-14.4,9.4-22.3c0-7.9-8-14.8-9.4-22.3c-1.5-7.6,3.101-17,0.301-24.2c-2.9-7.2-12.801-10.8-16.9-17.2 c-4-6.5-2.9-16.9-8.1-22.8c-5-5.7-15.601-5.9-21.601-11c-5.8-4.9-7.7-15.3-14.3-19.5c-6.4-4-16.7-1.5-23.7-4.8 c-6.8-3.2-11.3-12.9-18.8-15.3c-7.2-2.5-16.6,2.5-24.2,0.8c-7.399-1.6-13.899-10-21.7-10.8c-7.6-0.8-15.699,6-23.5,6 s-15.9-6.8-23.5-6c-7.8,0.8-14.3,9.2-21.7,10.8c-7.6,1.7-17-3.2-24.2-0.8c-7.4,2.5-11.9,12.1-18.8,15.3c-7.1,3.4-17.4,0.8-23.7,4.8 c-6.6,4.3-8.6,14.6-14.3,19.5c-5.9,5-16.6,5.3-21.6,11c-5.2,5.8-4,16.4-8.1,22.8c-4.1,6.6-14.1,10.2-16.9,17.4 c-2.9,7.2,1.8,16.6,0.3,24.2C87.783,132.465,79.883,139.365,79.883,147.265z M362.883,247.166c-1.9,6.9-4.301,13.8-7.101,20.6 c-17.1,41.7-50.3,78.5-89.6,78.5c-37.6,0-69.8-33.8-87.4-73.4c-3.8-8.4-6.9-17.1-9.3-25.9l-1.7-6l-6.2-0.8 c-7.4-1-16.7-9.5-20.3-23.7c-3.8-15,1-30.1,10.3-32.5c0.6-0.1,1.2-0.2,2-0.2c0.6,0,1,0,1.6,0.1l8.8,0.8l1.3-8.7 c2.5-16.2,7.3-31,13.9-43.9c2.4-0.6,4.8-0.8,7.1-0.4c8,1.6,14.6,14.4,23.5,15.5c8.2,0.9,17.7-10,26.4-9.5 c8.3,0.4,16.6,12.4,25.3,12.4s16.9-12,25.3-12.4c8.8-0.4,18.4,10.5,26.4,9.5c8.8-1,15.6-13.9,23.5-15.5c5.7-1.1,12.3,2.2,18.3,4.3 c5.7,12,9.7,25.4,12,40.1l1.3,8.7l8.8-0.8c1.301-0.1,2.601-0.1,3.601,0.1c9.2,2.4,14,17.5,10.3,32.5c-3.6,14.2-12.9,22.7-20.3,23.7 l-6.2,0.8L362.883,247.166z M309.483,185.765c-15.8,0-29.2,9.7-34.8,23.6c-9.5-4-20.3-4.3-29.8-0.4c-5.7-13.6-19.2-23.1-34.7-23.1 c-20.7,0-37.6,16.9-37.6,37.6s16.9,37.6,37.6,37.6c19.2,0,34.9-14.6,37.2-33.2c7.6-5.3,17.8-4.9,25.1,1c2.7,18.1,18.3,32,37.1,32 c20.7,0,37.601-16.9,37.601-37.6C347.183,202.565,330.283,185.765,309.483,185.765z M210.083,242.965c-10.8,0-19.6-8.7-19.6-19.6 c0-10.8,8.7-19.6,19.6-19.6c10.8,0,19.6,8.7,19.6,19.6C229.683,234.166,220.883,242.965,210.083,242.965z M309.483,242.965 c-10.8,0-19.6-8.7-19.6-19.6c0-10.8,8.699-19.6,19.6-19.6c10.8,0,19.6,8.7,19.6,19.6 C329.083,234.166,320.283,242.965,309.483,242.965z M371.183,327.166c-11.4,19.399-24.5,35.699-42,44.699 c-36,18.4-62.7,33.4-62.7,33.4l-0.1-0.1v-0.3l-0.4,0.1l-0.3-0.2v0.3l-0.1,0.101c0,0-26.8-14.9-62.7-33.4c-17.5-9-30.6-25.3-42-44.7 c-53.3,21.601-90.4,71.5-90.4,114.801c0,45.8,0,90.199,0,90.199h195.1h0.8h195.2c0,0,0-44.399,0-90.199 C461.583,398.565,424.383,348.766,371.183,327.166z" />{" "}
						</g>{" "}
					</g>
				</svg>
				<span className="sr-only">Acme Inc</span>
			</Link>
			<nav className="hidden md:flex justify-center w-full">
				<ul className="flex items-center space-x-6">
					{sections.map((section) => (
						<li key={section.label}>
							<Link
								to={section.link}
								// className="text-sm font-medium transition-colors hover:text-primary"
								className={cn(
									location.pathname === section.link
										? "text-primary"
										: "text-muted-foreground",
									"text-sm font-medium transition-colors hover:text-primary",
								)}
							>
								{section.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className="md:hidden">
				<Button variant="ghost" size="icon">
					<MenuIcon className="h-6 w-6" />
					<span className="sr-only">Toggle menu</span>
				</Button>
			</div>
		</header>
	);
};
