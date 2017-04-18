import React, { Component } from "react";
import { BackButton } from "../components/backButton";
import Styled from "styled-components/native";
import * as Colors from "../styles/variables";

const Container = Styled.View`
  flex: 1
  z-index:9;
`;

export function InfoDecorator() {
  return DecoratedComponent =>
    class DefaultInfoScene extends Component {
      render() {
        return (
          <Container>
            <BackButton />
            <DecoratedComponent {...this.props} />
          </Container>
        );
      }
    };
}
