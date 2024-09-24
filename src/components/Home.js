import React from "react";
import Sobre from "./Sobre";
import { Box } from "@mui/material";

const Home = () => {
  const backImage = require("../images/back.png");
  const cards = [
    {
      frontImage: require("../images/Roger.png"),
      backImage,
    },
    {
      frontImage: require("../images/Rafa.png"),
      backImage,
    },
    {
      frontImage: require("../images/Novak.png"),
      backImage,
    },
    {
      frontImage: require("../images/Kyrgios.png"),
      backImage,
    },
    {
      frontImage: require("../images/Bublik.png"),
      backImage,
    },
  ];
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sobre cards={cards} />
    </Box>
  );
};

export default Home;
