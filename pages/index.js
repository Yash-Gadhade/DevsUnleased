import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Homee } from "../components/Homee";
import { Motivation } from "../components/Motivation";
import { How } from "../components/How";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>FitLassian</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homee />
      <Motivation />
      <How />
    </div>
  );
}
