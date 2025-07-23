'use client';
import React from "react";

export default function CareerPath() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-3">
      
      {/* Card 1 */}
      <div className="p-6 border-2 border-black transition-all transform hover:-translate-y-2 hover:bg-black hover:text-white">
        <h1 className="mb-0 font-semibold tracking-tight hover:text-white hover:font-bold ease-in-out">
          Software Administration and Development
        </h1>
        <a
          href="https://www.conversionesflora.xyz/"
          className="mb-1 inline-block hover:text-pink-600 hover:font-bold ease-in-out"
        >
          Conversiones Flora S.A. de C.V.
        </a>
        <p className="mb-1 font-normal">08/2022 - Present</p>
        <p className="mb-1 font-normal">
          Company specialized in the production of tissue paper for napkins.
          I led the digital transformation of the company by developing a
          custom internal web application to optimize production processes.
          I also managed administrative operations to improve accounting
          and logistics workflows.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 border-2 border-black transition-all transform hover:-translate-y-2 hover:bg-black hover:text-white">
        <h1 className="mb-1 font-semibold tracking-tight hover:text-white hover:font-bold ease-in-out">
          Executive Assistant
        </h1>
        <a
          href="https://www.recubrimientosalanis.com/"
          className="mb-1 inline-block hover:text-blue-200 hover:font-bold ease-in-out"
        >
          Recubrimientos Alanis S.A. de C.V.
        </a>
        <p className="mb-1 font-normal">01/2021 - 08/2022</p>
        <p className="mb-1 font-normal">
          Company dedicated to manufacturing rollers for the paper, textile,
          steel, and printing industries.
          Supervision, review, and verification of quality standards, production
          metrics, financial and administrative indicators to identify deviations
          and their root causes.
        </p>
      </div>

    </main>
  );
}
