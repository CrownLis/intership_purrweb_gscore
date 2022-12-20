import { FC } from 'react';
import styled from 'styled-components';

const Loader: FC = () => <StyledLoader />;

const StyledLoader = styled(Loader)`
  animation-duration: 800ms;
  animation-name: rotating;
  animation-iteration-count: infinite;
  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
