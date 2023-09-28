import Tag from './components/tag';
import Presentation from './components/presentation';
import Carousel from './components/carousel';

export default function Home() {
  return (
    <main>
      <div className='p-3 flex'>
        <Presentation/>
        
      </div>
      <div className='ml-3 mr-3'>
        <div className='space-x-2 grid grid-row'>
          <Tag
            imageSrc="resources/12345.png"
            title="Resaltador de Sintaxis para un procesamiento amplio de archivos"
            description="Se diseñó un resaltador de Sintaxis en Python, donde recibe una gran cantidad de archivos (+2000),
            los cuales van siendo procesados de forma paralela (no necesariamente distribuida) por los distintos 
            nucelos que tiene la computadora. Al ser procesador por el Tokenizador, se despliegan en una página los
            resultados resaltados en sus respectivos colores."
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/zlj89YzcG1xILZr8"
          />
          <Tag
            imageSrc="resources/123.jpg"
            title="Modelación de sistemas multiagentes con gráficas computacionales"
            description="Desarrollamos un sistema de multiagentes en Python, usando la librería mesa, donde
            diseñamos una ciudad con semáforos y autos como automatas y un sistema integrado en cada
            auto ,tipo Waze, utilizando el algoritmo de Dijkstra. La simulación fue con Unity en 3ra
            Dimensión"
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/R1Y0ZkZul0jTArvl"
          />
          <Tag
            imageSrc="resources/escudo-atz.png"
            className="bg-white"
            title="Integracion de Seguridad Informática de redes y sistemas de Software"
            description="Desarrollamos una aplicación móvil para la asistencia de los ciudadanos en el Municipio de
            Atizapán. Utilizamos tecnologías de Back-End como: Node.Js, Docker Compose, FireBase (Google), Nginx, gRPC.
            Front-End utilizamos: Next.js, React.js y Tailwind css. Para el desarrollo de la App Móvil Utilizamos Android Studio con C#. "
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/kL0b0Yvtgj5s0AmY"
          />
        </div>
      </div>
    </main>
  )
}