import { Container } from "@mui/material";

export const GameOver = ({ puntaje }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        fontSize: "20px",
      }}
    >
      <p style={{ color: "#fff" }}>
        {puntaje === 50
          ? "Cuando sea grande quiero ser como vos!"
          : "Sos de madera!"}
      </p>
      <p style={{ color: "#fff" }}>
        Has llegado al final del juego, tu puntaje final es: {puntaje}
      </p>
    </Container>
  );
};
