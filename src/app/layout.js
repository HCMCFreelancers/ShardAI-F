import "./globals.css";
import "../styles/index.scss";
import Header from "@/components/header/header";

export const metadata = {
  title: "Shard AI",
  description:
    "With deep expertise in Crypto and Web3, AI Gen has established the infrastructure, partnerships, and distribution network for successful Crypto mining.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  );
}
