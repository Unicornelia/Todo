import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import AnimatedButton from './AnimatedButton';
import { Goal } from './types.ts';

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

const StyledError = styled.div`
  color: deeppink;
`;

type onAddGoalType = { onAddGoal: (newGoal: Goal) => void };

const NewGoal = ({ onAddGoal }: onAddGoalType) => {
  const [inputText, setInputText] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const addGoalHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      const newGoal = {
        id: Math.random(),
        text: inputText,
      };
      setInputText('');
      onAddGoal(newGoal);
    } else {
      setError('Input cannot be empty');
    }
  };

  const textChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <StyledForm className="new-goal" onSubmit={addGoalHandler}>
      {error && (
        <StyledError>
          <p>{error}</p>
        </StyledError>
      )}
      <input type="text" onChange={textChangeHandler} value={inputText} />
      <AnimatedButton type="submit" value="Add Goal">
        Add Goal
      </AnimatedButton>
    </StyledForm>
  );
};

export default NewGoal;
