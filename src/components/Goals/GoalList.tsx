import { Goal } from './types.ts';
import styled from 'styled-components';

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10rem 0;
  padding: 0;
  justify-self: center;

  li {
    align-items: center;
    list-style: square;
    padding: 0.5rem;
  }
`;

const GoalList = ({ goals }: { goals: Array<Goal> }) => {
  return (
    <StyledUnorderedList>
      {goals.map((goal: Goal) => (
        <li key={goal.id}>{goal.text}</li>
      ))}
    </StyledUnorderedList>
  );
};

export default GoalList;
