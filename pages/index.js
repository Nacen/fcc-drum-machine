import Head from "next/head";
import DrumMachine from "../components/DrumMachine/DrumMachine";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FCC Drum Machine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1 className="title">Drum Machine</h1>
        <DrumMachine />
      </main>
      <script
        src="
      https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js
      "
      />
    </div>
  );
}
