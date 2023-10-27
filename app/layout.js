import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/ui/navbar/NavBar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Tech blog",
  description: "A blog about the latest new in the tech world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-200 dark:bg-medium dark:text-white overflow-x-hidden`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
