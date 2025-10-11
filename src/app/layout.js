import "../app/globals.css";

export const metadata = {
  title: "Rachana Hegde | Frontend Developer & Designer",
  description:
    "Portfolio website of Rachana Hegde — crafting elegant, user-centric digital experiences with modern frontend and AI-powered development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
