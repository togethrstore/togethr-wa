import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Headerr from "../components/Headerr";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <div className="">
        <Headerr />
        <Hero />
       <About />
    <Footer />
      </div>
    </div>
  );
}
