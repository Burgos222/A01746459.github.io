'use client';
import Tag from './components/tag';
import Presentation from './components/presentation';
import Trayectoria from './components/trayectoria';

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
  const fifth = [
    { src: 'resources/keras.png', alt: 'Image 7' },
    { src: 'resources/react.png', alt: 'Image 4' },
    { src: 'resources/sklearn.png', alt: 'Image 8' },
  ]

  return (
    <main className='grid'>
      <div className='p-3 grid-cols-3 md:flex'>
        <Presentation/>
        <Trayectoria/>
                

      </div>
     
      <div className='ml-3 mr-3'>
        <div className='grid grid-row'>
          <Tag
            images={fifth}
            className="bg-white"
            title="NO-LINGER"
            description="Aplicación móvil sin servidor desarrollada con React Native, que emplea Inteligencia
            Artificial para reconocer bolsas de papas en un estante a través de fotografías.
            La implementación de la IA se realizó utilizando tecnologías como SkLearn y Keras, entre otras.
            Participación en el entrenamiento del modelo de IA, así como en el diseño y desarrollo de la 
            experiencia e interfaz de usuario (UX/UI)."
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/BYNdLg9HeVLTeDK6"
          />
        <Tag
            images={forth}
            className="bg-white"
            title="ArabaMarket"
            description="En este proyecto, un equipo de alrededor de 30 ingenieros en Tecnologías
             Computacionales se unió para desarrollar una plataforma web innovadora. Utilizamos
             tecnologías como AWS, GCP y Flask para crear la página web, con React.js en el front-end
             y Node.js en el back-end. La base de datos fue gestionada con MongoDB. Mi contribución
             principal se centró en el desarrollo del back-end, estableciendo rutas y conexiones
             con la base de datos para mostrar subastas en tiempo real, junto con detalles 
             de automóviles. También participé en el diseño del modelo de negocios y contribuí
             al front-end, especialmente en el despliegue de imágenes y formato de tablas y precios."
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/BYNdLg9HeVLTeDK6"
          />
          <Tag
            images={images}
            title="Resaltador de Sintaxis para Procesamiento Eficiente de Archivos a Gran Escala"
            description="Se desarrolló un resaltador de sintaxis en Python capaz de procesar una
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
            title="Incidentes Atizapán"
            description="Creamos una aplicación móvil diseñada para brindar asistencia a los residentes
             del Municipio de Atizapán. En el desarrollo de esta aplicación, hemos empleado diversas 
             tecnologías en el lado del servidor, como Node.js, Docker Compose, Firebase y Nginx,
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