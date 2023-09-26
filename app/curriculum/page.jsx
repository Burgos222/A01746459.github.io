'user client';

export default function Proyectos() {
  return (
        <div className="w-[100vw] h-[100vh]">
          <iframe
            src="../resources/CV_SebastianBurgos.pdf" // Replace with the correct path to your PDF
            title="PDF Viewer"
            width="100%"
            height="100%"
            className="border-none"
          ></iframe>
        </div>
  );
}