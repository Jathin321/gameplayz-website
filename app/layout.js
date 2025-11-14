import InitialLoader from "./components/InitLoader";
import "./globals.css";

export const metadata = {
  title: "Gameplayz",
  description: "Esports platform for tournaments and scrims",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <InitialLoader />
        {children}
      </body>
    </html>
  );
}
