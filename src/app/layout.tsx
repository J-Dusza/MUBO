import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";

export const metadata = {
  title: "MUNO",
  description: "MUNO - Clothing Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
