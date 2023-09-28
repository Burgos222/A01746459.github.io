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
            title="Desarrollo Colaborativo de una Plataforma de Subastas de Automóviles con Tecnologías Cloud y Web"
            description="En este proyecto, un equipo de alrededor de 30 Ingenieros en Tecnologías 
            Computacionales se unió para desarrollar una plataforma web innovadora. Utilizamos un 
            conjunto de tecnologías que incluyeron AWS, GCP y Flask para la creación de la página web. 
            En el lado del front-end, se empleó React.js, mientras que Node.js se utilizó para el desarrollo
            del back-end. La base de datos fue gestionada a través de MongoDB.
            Mi contribución principal se centró en el desarrollo del back-end, donde me encargué 
            de establecer las rutas y las conexiones con la base de datos. Esto permitió mostrar 
            subastas en tiempo real, junto con imágenes, precios y detalles de los automóviles. 
            Además, participé activamente en el diseño e implementación del modelo de negocios. 
            Aunque mi enfoque principal fue el back-end, también tuve una participación 
            significativa en el front-end, contribuyendo al despliegue de imágenes y al formato de 
            algunas tablas y precios."
            linkUrl="https://github.com/ArabaMarket/BackEnd"
          />
          <Tag
            images={ImagesTagOne}
            title="Resaltador de Sintaxis para Procesamiento Eficiente de Archivos a Gran Escala"
            description="Se ha desarrolló un resaltador de sintaxis en Python capaz de procesar una
             gran cantidad de archivos (más de 2000) de manera eficiente. Estos archivos son procesados 
             en paralelo, aprovechando los múltiples núcleos de la computadora. Una vez que son procesados 
             por el tokenizador, los resultados se presentan en una página web con resaltado de sintaxis en 
             colores correspondientes a cada elemento."
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/zlj89YzcG1xILZr8"
          />
          <Tag
            images={second}
            title="Simulación de Sistemas Multiagentes mediante Gráficas Computacionales"
            description="Creamos un sistema de múltiples agentes en Python utilizando la biblioteca Mesa.
             En este sistema, diseñamos una ciudad que incluye semáforos y automóviles representados como 
             autómatas. Además, hemos implementado un sistema de navegación incorporado en cada automóvil, 
             similar a Waze, que utiliza el algoritmo de Dijkstra. La simulación se llevó a cabo en Unity 
             en un entorno tridimensional."
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/R1Y0ZkZul0jTArvl"
          />
          <Tag
            images={third}
            className="bg-white"
            title="Seguridad Integral para Redes y Sistemas de Software"
            description="Creamos una aplicación móvil diseñada para brindar asistencia a los residentes
             del Municipio de Atizapán. En el desarrollo de esta aplicación, hemos empleado diversas 
             tecnologías en el lado del servidor, como Node.js, Docker Compose, Firebase de Google y Nginx,
             junto con la implementación de gRPC. Para la interfaz de usuario y la experiencia del usuario,
             hemos utilizado Next.js, React.js y Tailwind CSS. En cuanto al desarrollo de la aplicación 
             móvil en sí, hemos optado por Android Studio y hemos utilizado C# como lenguaje de programación."
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/kL0b0Yvtgj5s0AmY"
          />
          
        </div>
      </div>
    </main>
  )
}