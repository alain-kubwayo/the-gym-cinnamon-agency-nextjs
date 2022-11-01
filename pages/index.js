import Head from "next/head";
import Navigation from "../components/sections/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CINNAMON | All software, zero bullshit.</title>
        <meta
          name="description"
          content="Results focused design & development agency."
        />
        <link rel="icon" href="https://cinnamon.agency//favicon.ico" />
      </Head>
    </div>
  );
}
