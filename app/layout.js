import "./globals.scss";

export const metadata = {
  title: "Balansami",
  description: "Balansami — osnovni Next.js projekat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
