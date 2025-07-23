'use client';
import React from "react";

export default function Trayectoria() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-3">
      
      {/* Tarjeta 1 */}
      <div className="p-6 border-2 border-black transition-all transform hover:-translate-y-2 hover:bg-black hover:text-white">
        <h1 className="mb-0 font-semibold tracking-tight hover:text-white hover:font-bold ease-in-out">
          Administración y Desarrollo de Software
        </h1>
        <a
          href="https://www.conversionesflora.xyz/"
          className="mb-1 inline-block hover:text-pink-600 hover:font-bold ease-in-out"
        >
          Conversiones Flora S.A. de C.V.
        </a>
        <p className="mb-1 font-normal">08/2022 - presente</p>
        <p className="mb-1 font-normal">
          Empresa especializada en la producción de papel tissue para servilletas.
          Lideré la transformación digital de la empresa mediante el desarrollo de una
          aplicación web interna personalizada para optimizar los procesos de producción.
          También gestioné operaciones administrativas para mejorar los flujos de trabajo
          contables y logísticos.
        </p>
      </div>

      {/* Tarjeta 2 */}
      <div className="p-6 border-2 border-black transition-all transform hover:-translate-y-2 hover:bg-black hover:text-white">
        <h1 className="mb-1 font-semibold tracking-tight hover:text-white hover:font-bold ease-in-out">
          Asistente de Dirección
        </h1>
        <a
          href="https://www.recubrimientosalanis.com/"
          className="mb-1 inline-block hover:text-blue-200 hover:font-bold ease-in-out"
        >
          Recubrimientos Alanis S.A. de C.V.
        </a>
        <p className="mb-1 font-normal">01/2021 - 08/2022</p>
        <p className="mb-1 font-normal">
          Empresa dedicada a la fabricación de rodillos para las industrias papelera, textil, 
          siderúrgica y de impresión.
          Supervisión, revisión y verificación de estándares de calidad, métricas de producción, indicadores 
          financieros y administrativos para identificar desviaciones y sus causas raíz.
        </p>
      </div>

    </main>
  );
}
