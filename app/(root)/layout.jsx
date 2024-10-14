"use client"
import Sidebar from "@/components/Sidebar";
import Providers from "@/components/Providers";

export default function RootLayout({ children }) {
	return (
		<>
		  <Sidebar />
		  <Providers> {/* Wrap the entire app */}
            {children}
          </Providers>
		</>
	);
}
