import React, { useEffect } from "react";
import Hero from "../components/Hero";

function Home() {
  useEffect(() => {
    document.title = "exhum0 | Home";
  }, []);

  return (
    <Hero />
  );
}

export default Home;