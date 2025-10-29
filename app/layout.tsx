import { montserrat } from "./ui/fonts";
import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div>{children}</div>
        <footer className="py-10 flex justify-center items-center">
          Hecho con ♥ por mi
        </footer>
      </body>
    </html>
  );
}
