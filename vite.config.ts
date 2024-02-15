import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ezurno-portfolio/",
  mode: "production",
  plugins: [react()],
});
