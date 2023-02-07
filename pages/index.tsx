import Head from "next/head";
import { Inter } from "@next/font/google";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="whatsapp-clone2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
    </div>
  );
}
