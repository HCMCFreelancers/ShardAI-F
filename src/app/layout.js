import "./globals.css";
import "../styles/index.scss";
import Header from "@/components/header/header";

export const metadata = {
  metadataBase: new URL("https://www.shardai.io/"),
  title: "Shard AI",
  description:
    "Harnessing the power of artificial intelligence, Shard AI revolutionizes the cryptocurrency mining landscape by using AI to optimize mining operations for maximum efficiency and profitability.",
  openGraph: {
    title: "Shard AI",
    description:
      "Harnessing the power of artificial intelligence, Shard AI revolutionizes the cryptocurrency mining landscape by using AI to optimize mining operations for maximum efficiency and profitability.",
    url: new URL("https://www.shardai.io/"),
  },
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
