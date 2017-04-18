import React from "react";
import { Container } from "./styles";
import { Span, Button } from "../../scenes/start/styles";

export function GameOverComponent({ back }) {
  return (
    <Container>
      <Button onPress={back}>
        <Span>Game Over</Span>
      </Button>
    </Container>
  );
}
