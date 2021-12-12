import React, { useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

interface Props {
  backdropShow: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>
}
const StyledBackdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(16, 16, 16, 0.85);
  z-index: 50;
  top: 0;
  left: 0;
`;

const Backdrop: React.FC<Props> = ({ backdropShow, onClick }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={backdropShow}
      mountOnEnter
      unmountOnExit
      timeout={900}
      classNames="backdrop"
      nodeRef={nodeRef}
    >
      <StyledBackdrop onClick={onClick} ref={nodeRef} data-testid="backdrop" />
    </CSSTransition>
  );
};

export default Backdrop;
