import styled from "styled-components";
import { css } from "@emotion/react";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: papayawhip;
`;

export const ContainerForm = styled.div`
  display:flex;
  height: 800px;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 450px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Title = styled.div`
  cursor: pointer;
  color: #1976d2;
  &:hover {
    opacity: 0.8;
  }
`;

export const InputContainer = styled.div`
  height: 100px;
`;

export const LoaderContainer = styled.div`
  opacity: 0.6;
  pointer-events: none;
`;

export const override = css`
position: absolute;
top: 410px;
left: 0;
right: 0;
margin:auto;
`;