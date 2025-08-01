import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "National Girlfriend Day - Surat Cinta Digital",
  description:
    "Website interaktif untuk merayakan National Girlfriend Day dengan amplop digital dan fitur romantis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
