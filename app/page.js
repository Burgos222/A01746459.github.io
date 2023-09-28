import Tag from './components/tag';
import Presentation from './components/presentation';

export default function Home() {
  const images = [
    { src: 'resources/python.png', alt: 'Image 1' },
    { src: 'resources/html5.png', alt: 'Image 4' },
  ];
  const second = [
    { src: 'resources/python.png', alt: 'Image 1' },
    { src: 'resources/unity.png', alt: 'Image 2' }
  ]
  const third = [
    { src: 'resources/node-js.png', alt: 'Image 1' },
    { src: 'resources/docker.png', alt: 'Image 2' },
    { src: 'resources/firebase.png', alt: 'Image 3' },
    { src: 'resources/tailwind.png', alt: 'Image 4' },
    { src: 'resources/c#.png', alt: 'Image 5' },
  ]
  const forth = [
    { src: 'resources/node-js.png', alt: 'Image 1' },
    { src: 'resources/docker.png', alt: 'Image 2' },
    { src: 'resources/firebase.png', alt: 'Image 3' },
    { src: 'resources/tailwind.png', alt: 'Image 4' },
    { src: 'resources/c#.png', alt: 'Image 5' },
  ]

  const numberOfImagesToLoad = 2; // Adjust this number as needed
  const ImagesTagOne = images.slice(0, numberOfImagesToLoad);

  return (
    <main>
      <div className='p-3 flex'>
        <Presentation/>
        
      </div>
      <div className='ml-3 mr-3'>
        <div className='grid grid-row'>
        <Tag
            images={forth}
            className="bg-white"
            title="Desarrollo Web con tecnologías de Vanguardia"
            description="En este proyecto participamos alrededor de 30 Ingenieros en Tecnologías Computacionales. Desarrollamos una página
            web utilizando AWS, GCP y Flask para la generación de la página web, React.js para front-end, Node.js para back-end,
            MongoDB para base de datos. Mi trabajo principal fue en back-end, realizando rutas y conexiones con la base de datos,
            para posteriormente mostrar subastas en tiempo real, imágenes, precios y detalles de los automóviles. Participé en el
            diseño y la implementación del modelo de negocios, asi como tambien una ligera participación en front-end; mostrando
            las imágenes y dando formato a algunas tablas y precios."
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/kL0b0Yvtgj5s0AmY"
          />
          <Tag
            images={ImagesTagOne}
            title="Resaltador de Sintaxis para un procesamiento amplio de archivos"
            description="Se diseñó un resaltador de Sintaxis en Python, donde recibe una gran cantidad de archivos (+2000),
            los cuales van siendo procesados de forma paralela (no necesariamente distribuida) por los distintos 
            nucleos que tiene la computadora. Al ser procesador por el Tokenizador, se despliegan en una página los
            resultados resaltados en sus respectivos colores."
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/zlj89YzcG1xILZr8"
          />
          <Tag
            images={second}
            title="Modelación de sistemas multiagentes con gráficas computacionales"
            description="Desarrollamos un sistema de multiagentes en Python, usando la librería mesa, donde
            diseñamos una ciudad con semáforos y autos como automatas y un sistema integrado en cada
            auto ,tipo Waze, utilizando el algoritmo de Dijkstra. La simulación fue con Unity en 3ra
            Dimensión"
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/R1Y0ZkZul0jTArvl"
          />
          <Tag
            images={third}
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