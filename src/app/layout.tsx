import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";
import ClientContext from "@/shared/ClientContext";

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
        <ClientContext>
          <Navbar />
          {children}
        </ClientContext>
      </body>
    </html>
  );
}
