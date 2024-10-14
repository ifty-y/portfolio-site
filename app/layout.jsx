import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Ifty | Portofolio",
	description:
		"A mechanical engineering final year student in Islamic University of Technology (IUT). I love to learn new things and always. open to new opportunities.",
	author: "Iftekhar Ahmed Ifty",
	siteUrl: "",
	applicationName: "Ifty",
	keywords: [
		"Ifty",
		"ifty",
		"Iftekhar",
		"Ahmed",
		"Ifterkhar Ahmed Ifty",
	],
	openGraph: {
		type: "website",
		url: "",
		title: "Ifty | Portofolio",
		site_name: "Ifty | Portofolio",
		description: "My name is Ifty, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Ifty Portofolio",
			},
		],
		site_name: "Ifty | Portofolio",
	},
};


const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
