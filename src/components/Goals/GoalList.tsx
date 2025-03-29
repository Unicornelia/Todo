import React from 'react';
import { Goal } from './types.ts';
import styled from 'styled-components';

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 2rem 0;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    border: 1px solid aquamarine;
    border-radius: 6px;
    padding: 1rem;
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
