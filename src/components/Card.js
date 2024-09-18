import React, { useState } from "react";
import { Box } from "@mui/material";

const Carta = ({ frontImage, backImage }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Box
      sx={{
        width: 200,
        height: 350,
        cursor: "pointer",
        perspective: "1000px", // Añade perspectiva para el efecto 3D
        position: "relative",
      }}
      onClick={handleFlip}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Frente de la carta */}
        <img
          src={frontImage}
          alt="Front of card"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden", // Oculta el reverso cuando está mirando hacia atrás
          }}
        />

        {/* Reverso de la carta */}
        <img
          src={backImage}
          alt="Back of card"
          style={{
            width: "100%",
            height: "100%",
            transform: "rotateY(180deg)", // Hace que el reverso se voltee
            backfaceVisibility: "hidden", // Oculta el frente cuando está volteado
          }}
        />
      </Box>
    </Box>
  );
};

export default Carta;
