import Tag from './components/tag';

export default function Home() {
  return (
    <main className=''>
      <div className='flex m-5'>
        <div className='flex flex-row space-x-4'>
        <Tag
        imageSrc="resources/12345.png"
        title="Resaltador de Sintaxis"
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
        </div>
      </div>
    </main>
  )
}