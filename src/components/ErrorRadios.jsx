import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import { preguntasTrivia } from "../utils/preguntas";

export default function ErrorRadios({
  preguntaActual,
  setPuntaje,
  botonSiguiente,
  setBotonSiguiente,
}) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Seleccioná sabiamente");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === preguntasTrivia[preguntaActual].respuestaCorrecta) {
      setHelperText("Sos una crack!");
      setError(false);
      setPuntaje((prev) => prev + 10);
    } else {
      setHelperText("Respuesta incorrecta");
      setError(true);
    }
    setBotonSiguiente(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">Seleccioná tu respuesta</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          {preguntasTrivia[preguntaActual].opciones.map((opcion) => (
            <FormControlLabel
              value={opcion}
              control={<Radio />}
              label={opcion}
              key={opcion}
            />
          ))}
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        {botonSiguiente && (
          <Button
            sx={{ mt: 1, mr: 1, color: "purple" }}
            type="submit"
            variant="outlined"
          >
            Chequear respuesta
          </Button>
        )}
      </FormControl>
    </form>
  );
}
