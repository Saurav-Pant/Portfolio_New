import Navbar from "./Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Saurav Pant | Portfolio",
  description: "Saurav Pant's Portfolio",
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
        {children}
      </body>
    </html>
  );
}
