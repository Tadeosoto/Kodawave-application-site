import "./Cards.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionDiv = motion.div;

const projects = [
  {
    title: "Aplicaciones Agrícolas con Drone.",
    description:
      " Ofrecemos soluciones de precisión mediante drones para aplicar nutrientes foliares, que fortalecen tus cultivos; insecticidas, para controlar plagas; fungicidas, que previenen enfermedades; y herbicidas, para manejar malezas. Nuestra tecnología garantiza una distribución uniforme, eficiencia en recursos y un enfoque sostenible.",
    src: "galeria5.jpg",
    color: "#c2f9d2",
  },
  {
    title: "Mapeo de áreas",
    description:
      "Realizamos mapeo con antena RTK para obtener datos precisos del terreno, acompañado de la planeación de rutas de vuelo optimizadas. Además, cuantificamos y analizamos los requerimientos específicos del cultivo,estimación de maleza por m2, proporcionando información clave para maximizar la productividad de tus tierras.",
    src: "isfaMapeo.jpg",
    color: "#aaf6c0",
  },
  {
    title: "Control de plagas",
    description:
      " Aplicamos tratamientos dirigidos utilizando drones, asegurando una distribución uniforme de pesticidas y reduciendo el impacto ambiental al evitar el uso excesivo de químicos.",
    src: "isfaPlaga.jpg",
    color: "#91f3ae",
  },
  {
    title: "Monitoreo y Diagnóstico de Cultivos",
    description:
      " Evaluamos de manera integral la salud y el estado de tus cultivos a través del análisis de niveles de nutrientes, detección de estrés hídrico, identificación de erosión del suelo y monitoreo del estado general de las plantas. Utilizamos tecnología avanzada para ofrecer soluciones precisas que optimicen el rendimiento y la sostenibilidad de tus tierras.",
    src: "isfaNutricion.jpg",
    color: "#78da95",
  },
];

const Card = ({ i, title, description, src, color }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <div ref={container} className="cardContainer">
      <div className="cardSticky">
        <div
          className="card"
          style={{ backgroundColor: color, top: `calc(-10% + ${i * 25}px)` }}
        >
          <h2>{title}</h2>
          <div className="body">
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="imageContainer">
              <motion.div style={{ scale }} className="inner">
                <img src={`/images/${src}`} alt={title} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ParallaxCards = () => {
  return (
    <section className="seccion">
      {projects.map((project, index) => (
        <Card key={index} i={index} {...project} />
      ))}
    </section>
  );
};

export default ParallaxCards;
