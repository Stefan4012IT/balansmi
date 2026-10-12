import "./globals.scss";

export const metadata = {
  title: "Balansmi",
  description: "Balansmi — osnovni Next.js projekat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
