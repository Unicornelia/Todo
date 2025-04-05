import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

export const ControlledModal = ({ shouldShow, onToggle, children }: any) => {
  return (
    <>
      <button onClick={onToggle}>Toggle Modal</button>
      {shouldShow ? (
        <ModalBackground onClick={onToggle}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={onToggle}>Toggle Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      ) : null}
    </>
  );
};
