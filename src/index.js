import React from "react";
import { ReduxLayer } from "./configs/redux";
import { StylesLayer } from "./configs/styles";
import { ModalLayer } from "./configs/modal";
import { FullModalLayer } from "./configs/fullModal/";
import { RoutingLayer } from "./routes/";

export function Flippour() {
  return (
    <ReduxLayer>
      <StylesLayer>
        <RoutingLayer />
        <ModalLayer />
        <FullModalLayer />
      </StylesLayer>
    </ReduxLayer>
  );
}
