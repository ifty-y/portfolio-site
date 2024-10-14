import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Sidebar from "@/components/Sidebar";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes"; // Ensure this is imported from 'next-themes'
import "./nprogress.css";
import Providers from "@/components/Providers";

// FontAwesome configuration
config.autoAddCss = false;

// Dynamically import the progress bar component
const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
    ssr: false,
});

// Metadata for your site
export const metadata = {
    title: "Ifty | Portfolio",
    description: "A mechanical engineering final year student in Islamic University of Technology (IUT). I love to learn new things and always open to new opportunities.",
    author: "Iftekhar Ahmed Ifty",
    siteUrl: "",
    applicationName: "Ifty",
    keywords: ["Ifty", "ifty", "Iftekhar", "Ahmed", "Iftekhar Ahmed Ifty"],
    openGraph: {
        type: "website",
        url: "",
        title: "Ifty | Portfolio",
        site_name: "Ifty | Portfolio",
        description: "My name is Ifty, This is my portfolio website.",
        width: 1200,
        height: 630,
        images: [
            {
                url: "/og-image-rev.png",
                alt: "Ifty Portfolio",
            },
        ],
        site_name: "Ifty | Portfolio",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers attribute="class" defaultTheme="light">
                    <TopProgressBar />
                    <Navbar />
                    <Sidebar />
                    <main>{children}</main>
                    <Analytics />
                </Providers>
            </body>
        </html>
    );
}
