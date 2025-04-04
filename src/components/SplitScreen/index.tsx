import styled from 'styled-components';
import { FC, ReactNode } from 'react';

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div<{ $weight?: number }>`
  flex: ${(props) => props.$weight};
`;
type SplitScreenProps = {
  children: ReactNode[];
  leftWeight: number;
  rightWeight: number;
};

export const SplitScreen: FC<SplitScreenProps> = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  const [left, right] = children;

  return (
    <Container>
      <Pane $weight={leftWeight}>{left}</Pane>
      <Pane $weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default SplitScreen;
