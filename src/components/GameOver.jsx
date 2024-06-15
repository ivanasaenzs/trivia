import { Button, Container } from "@mui/material";

export const GameOver = ({
  puntaje,
  setMostrarPregunta,
  setPreguntaActual,
  setPuntaje,
}) => {
  const handleVolverAJugar = () => {
    setMostrarPregunta(false);
    setPreguntaActual(0);
    setPuntaje(0);
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        fontSize: "20px",
      }}
    >
      <p style={{ color: "#fff" }}>
        {puntaje === 50 || puntaje === 40
          ? "Cuando sea grande quiero ser como vos!"
          : "Casi lo logras!"}
      </p>
      <p style={{ color: "#fff" }}>
        Has llegado al final del juego, tu puntaje final es: {puntaje}
      </p>
      <Button
        variant="contained"
        onClick={handleVolverAJugar}
        sx={{
          fontSize: "18px",
          backgroundColor: "#D76EF5",
          "&:hover": { backgroundColor: "#55AD9B" },
        }}
      >
        Volver a jugar!
      </Button>
    </Container>
  );
};
