import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import { purple } from "@mui/material/colors";

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
      <FormControl
        sx={{ display: "flex", m: 3 }}
        error={error}
        variant="standard"
      >
        <FormLabel
          disabled={true}
          id="demo-error-radios"
          sx={{
            "&:hover": { color: "#C738BD" },
          }}
        >
          Seleccioná tu respuesta
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          {preguntasTrivia[preguntaActual].opciones.map((opcion) => (
            <FormControlLabel
              value={opcion}
              control={
                <Radio
                  sx={{
                    color: purple[300],
                    "&.Mui-checked": {
                      color: purple[300],
                    },
                  }}
                />
              }
              label={opcion}
              key={opcion}
            />
          ))}
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        {botonSiguiente && (
          <Button
            sx={{
              mt: 1,
              mr: 1,
              color: "#000",
              border: "none",
              backgroundColor: "#D76EF5",
              "&:hover": { backgroundColor: "#55AD9B", border: "none" },
            }}
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
