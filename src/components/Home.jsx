import { Pregunta } from "./Pregunta";
import { GameOver } from "./GameOver";

import { preguntasTrivia } from "../utils/preguntas";

import { Container } from "@mui/material";

export const Home = ({
  preguntaActual,
  setPreguntaActual,
  puntaje,
  setPuntaje,
}) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {preguntasTrivia.length - 1 >= preguntaActual ? (
        <Pregunta
          preguntaActual={preguntaActual}
          setPreguntaActual={setPreguntaActual}
          setPuntaje={setPuntaje}
          puntaje={puntaje}
        />
      ) : (
        <GameOver puntaje={puntaje} />
      )}
    </Container>
  );
};
