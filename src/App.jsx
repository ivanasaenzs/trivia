import "./utils/index.css";

import { Button, Container, CssBaseline } from "@mui/material";

import { Home } from "./components/Home";
import { useState } from "react";

function App() {
  const [mostrarPregunta, setMostrarPregunta] = useState(false);
  const [puntaje, setPuntaje] = useState(0);
  const [preguntaActual, setPreguntaActual] = useState(0);

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          minWidth: "100vw",
          backgroundColor: "#95D2B3",
        }}
      >
        {mostrarPregunta ? (
          <Home
            preguntaActual={preguntaActual}
            setPreguntaActual={setPreguntaActual}
            setMostrarPregunta={setMostrarPregunta}
            setPuntaje={setPuntaje}
            puntaje={puntaje}
          />
        ) : (
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <h1 style={{ color: "#fff" }}>¡Que comience el juego!</h1>
            <Button
              variant="contained"
              onClick={() => setMostrarPregunta(true)}
              sx={{
                fontSize: "18px",
                backgroundColor: "#D76EF5",
                "&:hover": { backgroundColor: "#55AD9B" },
              }}
            >
              Iniciar
            </Button>
          </Container>
        )}
      </Container>
    </>
  );
}

export default App;
