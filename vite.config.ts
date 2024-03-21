import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
	manifest: {
		name: "Diino",
		short_name: "Diino",
		description: "",
		icons: [
			{
				src: "/diino.png",
				sizes: "192x192",
				type: "image/png",
			},
		],
		theme_color: "#171717",
		background_color: "#e8ebf2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};
// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [react(), VitePWA(manifestForPlugin)],
});