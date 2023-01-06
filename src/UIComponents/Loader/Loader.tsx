import React from 'react';
import styled from 'styled-components';

const Loader = () => (
  <LoaderContainer>
    <Circle />
    <Circle />
    <Circle />
    <Circle />
  </LoaderContainer>
);

const LoaderContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  @keyframes loader-1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes loader-2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
  @keyframes loader-3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.color100};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  &:nth-child(1) {
    left: 8px;
    animation: loader-1 0.6s infinite;
  }
  &:nth-child(2) {
    left: 8px;
    animation: loader-2 0.6s infinite;
  }
  &:nth-child(3) {
    left: 32px;
    animation: loader-2 0.6s infinite;
  }
  &:nth-child(4) {
    left: 56px;
    animation: loader-3 0.6s infinite;
  }
`;

export default Loader;
