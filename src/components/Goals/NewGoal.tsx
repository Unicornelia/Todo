import React, { useState } from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';

const StyledForm = styled.form`
    text-align: center;
    margin-bottom: 3vh;
    display: flex;
    flex-direction: column;

    input {
        padding: 1vh;
        border-radius: 6px;
        border: 1px solid aquamarine;
    }
`;

type onAddGoalType = { onAddGoal: (newGoal: { id: number; text: string }) => void };

const NewGoal = ({ onAddGoal }: onAddGoalType) => {
  const [inputText, setInputText] = useState<string>('');

  const addGoalHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newGoal = {
      id: Math.random(),
      text: inputText
    };
    setInputText('');
    onAddGoal(newGoal);
  };

  const textChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <StyledForm className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" onChange={textChangeHandler} value={inputText} />
      <AnimatedButton type="submit" value="Add Goal">Add Goal</AnimatedButton>
    </StyledForm>
  );
};

export default NewGoal;