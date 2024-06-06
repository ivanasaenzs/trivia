import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import { ErrorRadios } from "./ErrorRadios";

import { preguntasTrivia } from "../utils/preguntas";
import ErrorRadios from "./ErrorRadios";

export const Pregunta = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);

  const siguientePregunta = preguntaActual + 1;

  const question = () => {
    setPreguntaActual((prev) => prev + 1);
  };

  console.log(preguntasTrivia[preguntaActual]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pregunta {siguientePregunta}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {preguntasTrivia[preguntaActual].pregunta}
        </Typography>
        <ErrorRadios preguntaActual={preguntaActual} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={question}>
          Siguiente pregunta
        </Button>
      </CardActions>
    </Card>
  );
};
