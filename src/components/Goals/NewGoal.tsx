import { ChangeEvent, FormEvent, useState } from 'react';
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
  const [error, setError] = useState<string | null>(null);

  const addGoalHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      console.log(inputText);
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
        <div style={{ color: 'red' }}>
          <p>{error}</p>
        </div>
      )}
      <input type="text" onChange={textChangeHandler} value={inputText} />
      <AnimatedButton type="submit" value="Add Goal">
        Add Goal
      </AnimatedButton>
    </StyledForm>
  );
};

export default NewGoal;
