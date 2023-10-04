'use client';
import Tag from '../components/tag';
import Presentation from '../components/presentation';

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
    <main className='grid'>
      <div className='p-3 flex'>
        <Presentation/>
      </div>
      <div className='ml-3 mr-3'>
        <div className='grid grid-row'>
        <Tag
            images={forth}
            className="bg-white"
            title="ArabaMarket"
            description="In this project, a team of around 30 Computer Technologies Engineers came together
             to develop an innovative web platform. We utilized a set of technologies that included AWS, 
             GCP, and Flask for the website's creation. On the front-end side, we employed React.js, while
              Node.js was used for the back-end development. The database was managed through MongoDB.
            My main contribution was focused on the back-end development, where I was responsible for
             establishing routes and connections with the database. This enabled real-time display of 
             auctions, along with car images, prices, and details. Additionally, I actively participated in 
             the design and implementation of the business model. Although my primary focus was on the 
             back-end, I also had a significant involvement in the front-end, contributing to image
              deployment and the formatting of some tables and prices."
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/BYNdLg9HeVLTeDK6"
          />
          <Tag
            images={images}
            title="Syntax Highlighter for Efficient Processing of Large-Scale Files"
            description="A syntax highlighter in Python has been developed that can efficiently 
            process a large number of files (over 2000). These files are processed in parallel, 
            making use of the computer's multiple cores. Once they are processed by the tokenizer, 
            the results are displayed on a web page with syntax highlighting in colors corresponding to 
            each element."
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/zlj89YzcG1xILZr8"
          />
          <Tag
            images={second}
            title="Simulation of Multi-Agent Systems through Computational Graphs"
            description="We developed a multi-agent system in Python using the Mesa library. In this 
            system, we designed a city that includes traffic lights and cars represented as automata. 
            Furthermore, we implemented a navigation system embedded in each car, similar to Waze, using
             the Dijkstra algorithm. The simulation was carried out in Unity in a three-dimensional 
             environment."
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/R1Y0ZkZul0jTArvl"
          />
          <Tag
            images={third}
            className="bg-white"
            title="Incidentes Atizapán"
            description="We created a mobile application designed to provide assistance to the residents of 
            the Municipality of Atizapán. In the development of this application, we employed various 
            server-side technologies such as Node.js, Docker Compose, Firebase, Nginx, along with the 
            implementation of gRPC. For the user interface and user experience, we used Next.js, React.js, 
            and Tailwind CSS. As for the development of the mobile application itself, we chose Android Studio 
            and used C# as the programming language."
           
            linkUrl="https://miscompetenciastec21.tec.mx/elumen/portfolio/kL0b0Yvtgj5s0AmY"
          />
          
        </div>
      </div>
    </main>
  )
}