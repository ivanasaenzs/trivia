import { Button, Container } from "@mui/material";
import { Pregunta } from "./components/Pregunta";
import { useState } from "react";


function App() {
  const [mostrarPregunta, setMostrarPregunta] = useState(false);

  return (
    <Container>
      {mostrarPregunta ? (
        <Pregunta />
      ) : (
        <Button variant="contained" onClick={() => setMostrarPregunta(true)}>
          Iniciar
        </Button>
      )}
    </Container>
  );
}

export default App;
