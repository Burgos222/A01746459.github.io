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
    { src: 'resources/cesharp.png', alt: 'Image 5' },
  ]
  const forth = [
    { src: 'resources/amazonwebservices.png', alt: 'Image 1' },
    { src: 'resources/python.png', alt: 'Image 2' },
    { src: 'resources/firebase.png', alt: 'Image 3' },
    { src: 'resources/react.png', alt: 'Image 4' },
    { src: 'resources/node-js.png', alt: 'Image 5' },
    { src: 'resources/mongodb.png', alt: 'Image 6' },
  ]

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
            title="ArabaMarket"
            description={
            <div className='group'>
            En este proyecto, un equipo de alrededor de 30 Ingenieros en Tecnologías 
            Computacionales se unió para desarrollar una plataforma web innovadora. Utilizamos un 
            conjunto de tecnologías que incluyeron <span className='group-hover:font-bold'>AWS, GCP y Flask </span>para la creación de la página web. 
            En el lado del front-end, se empleó <span className='group-hover:font-bold'> React.js </span>, mientras que <span className='group-hover:font-bold'> Node.js </span> se utilizó para el desarrollo
            del back-end. La base de datos fue gestionada a través de <span className='group-hover:font-bold'>MongoDB</span>.
            Mi contribución principal se centró en el desarrollo del back-end, donde me encargué 
            de establecer las rutas y las conexiones con la base de datos. Esto permitió mostrar 
            subastas en tiempo real, junto con imágenes, precios y detalles de los automóviles. 
            Además, participé activamente en el diseño e implementación del modelo de negocios. 
            Aunque mi enfoque principal fue el back-end, también tuve una participación 
            significativa en el front-end, contribuyendo al despliegue de imágenes y al formato de 
            algunas tablas y precios.
            </div>
            }
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/BYNdLg9HeVLTeDK6"
          />
          <Tag
            images={images}
            title="Resaltador de Sintaxis para Procesamiento Eficiente de Archivos a Gran Escala"
            description={
            <div className='group'>
             Se ha desarrolló un resaltador de sintaxis en <span className='group-hover:font-bold'>Python </span> capaz de procesar una
             gran cantidad de archivos (más de 2000) de manera eficiente. Estos archivos son procesados 
             en <span className='group-hover:font-bold'>paralelo</span>, aprovechando los <span className='group-hover:font-bold'>múltiples núcleos</span> de la computadora. Una vez que son procesados 
             por el tokenizador, los resultados se presentan en una página web con resaltado de sintaxis en 
             colores correspondientes a cada elemento.
             </div>
             }
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/zlj89YzcG1xILZr8"
          />
          <Tag
            images={second}
            title="Simulación de Sistemas Multiagentes mediante Gráficas Computacionales"
            description={<div className='group'>Creamos un sistema de múltiples agentes en <span className='group-hover:font-bold'>Python </span>utilizando la biblioteca <span className='group-hover:font-bold'>Mesa</span>.
             En este sistema, diseñamos una ciudad que incluye semáforos y automóviles representados como 
             autómatas. Además, hemos implementado un sistema de navegación incorporado en cada automóvil, 
             similar a Waze, que utiliza el<span className='group-hover:font-bold'> algoritmo de Dijkstra</span>. La simulación se llevó a cabo en <span className='group-hover:font-bold'>Unity</span>
             en un entorno tridimensional. </div>}
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/R1Y0ZkZul0jTArvl"
          />
          <Tag
            images={third}
            className="bg-white"
            title="Incidentes Atizapán"
            description={<div className='group'>Creamos una aplicación móvil diseñada para brindar asistencia a los residentes
             del Municipio de Atizapán. En el desarrollo de esta aplicación, hemos empleado diversas 
             tecnologías en el lado del servidor, como<span className='group-hover:font-bold'> Node.js, Docker Compose, Firebase</span> y <span className='group-hover:font-bold'>Nginx </span>,
             junto con la implementación de gRPC. Para la interfaz de usuario y la experiencia del usuario,
             hemos utilizado <span className='group-hover:font-bold'>Next.js, React.js</span> y <span className='group-hover:font-bold'>Tailwind CSS</span>. En cuanto al desarrollo de la aplicación 
             móvil en sí, hemos optado por <span className='group-hover:font-bold'>Android Studio</span> y hemos utilizado <span className='group-hover:font-bold'>C#</span> como lenguaje de programación.
             </div>}
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/kL0b0Yvtgj5s0AmY"
          />
          
        </div>
      </div>
    </main>
  )
}