/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import PainPoints from "./components/sections/PainPoints";
import Comparison from "./components/sections/Comparison";
import Solution from "./components/sections/Solution";
import About from "./components/sections/About";
import Differential from "./components/sections/Differential";
import Pricing from "./components/sections/Pricing";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Comparison />
        <Solution />
        <About />
        <Differential />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
