import { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Carta from "./Card";
import sobreImagen from "../images/Sobre.png";

const Sobre = ({ cards }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startOpening, setStartOpening] = useState(false); // Para controlar la animación de apertura

  const handleOpenEnvelope = () => {
    setStartOpening(true); // Inicia la animación de apertura
    setTimeout(() => {
      setIsOpen(true); // Muestra las cartas después de la animación
    }, 1600); // Duración de la animación de apertura antes de mostrar las cartas
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Envelope */}
      {!isOpen ? (
        <motion.div
          style={{
            width: "200px",
            height: "350px",
            backgroundImage: `url(${sobreImagen})`, // Reemplaza 'ruta_de_tu_imagen.jpg' con la URL de tu imagen
            backgroundSize: "cover", // Esto asegurará que la imagen cubra todo el área
            backgroundPosition: "center", // Esto centra la imagen
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            textAlign: "center",
          }}
          initial={{
            y: 0, // Posición inicial
          }}
          animate={
            startOpening
              ? {
                  scale: [1, 0.85, 1.25, 0], // Achicar al 85%, agrandar al 125%, luego desaparecer
                }
              : {
                  y: [0, -10, 0], // Movimiento de flotación
                }
          }
          transition={
            startOpening
              ? {
                  duration: 1.6, // Duración de la animación de apertura
                  ease: "easeInOut",
                }
              : {
                  duration: 2, // Duración de la animación de flotación
                  ease: "easeInOut",
                  repeat: Infinity, // Repetir infinitamente la flotación
                  repeatType: "loop", // Flotación continua
                }
          }
          onClick={handleOpenEnvelope}
        />
      ) : (
        <Box sx={{ display: "flex", gap: 5, marginTop: "20px" }}>
          {/* Mostrar las cartas después de abrir el sobre */}
          {cards.map((card, index) => (
            <Carta
              key={index}
              frontImage={card.frontImage}
              backImage={card.backImage}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Sobre;
