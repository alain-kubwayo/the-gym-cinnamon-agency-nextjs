import Head from "next/head";
import Hero from "../components/sections/Hero";
import HomeCards from "../components/sections/HomeCards";
import Services from "../components/sections/Services";
import Agile from "../components/sections/Agile";
import Communication from "../components/sections/Communication";
import Departments from "../components/sections/Departments";
import College from "../components/sections/College";
import Positions from "../components/sections/Positions";
import Topics from "../components/sections/Topics";
import CallToAction from "../components/sections/CallToAction";

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
      <Hero />
      <HomeCards />
      <Services />
      <Agile />
      <Communication />
      <Departments />
      <College />
      <Positions />
      <Topics />
      <CallToAction />
      
    </div>
  );
}
