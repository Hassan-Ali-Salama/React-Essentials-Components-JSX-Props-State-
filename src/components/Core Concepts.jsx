import React from "react";
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptitme) => (
            <CoreConcept key={conceptitme.title} {...conceptitme} />
          ))}
        </ul>
      </section>
    </>
  );
}
