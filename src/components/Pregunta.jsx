import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { preguntasTrivia } from "../utils/preguntas";
import ErrorRadios from "./ErrorRadios";

export const Pregunta = ({
  preguntaActual,
  setPreguntaActual,
  puntaje,
  setPuntaje,
}) => {
  const [botonSiguiente, setBotonSiguiente] = useState(true);
  const siguientePregunta = preguntaActual + 1;

  const question = () => {
    setPreguntaActual((prev) => prev + 1);
    setBotonSiguiente(true);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
          Pregunta {siguientePregunta}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {preguntasTrivia[preguntaActual].pregunta}
        </Typography>
        <ErrorRadios
          preguntaActual={preguntaActual}
          setPuntaje={setPuntaje}
          botonSiguiente={botonSiguiente}
          setBotonSiguiente={setBotonSiguiente}
        />
        <p style={{ textAlign: "center" }}>Tu puntaje es: {puntaje}</p>
      </CardContent>
      <CardActions>
        {!botonSiguiente && (
          <Button size="small" onClick={question} sx={{ margin: "auto" }}>
            Siguiente pregunta
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
