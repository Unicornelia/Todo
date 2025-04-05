import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 24rem;
  margin: 0 auto;
  padding: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.5rem;

  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 0.25rem;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #b61dd8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(84, 8, 96, 0.3);
  }
`;

const Error = styled.p`
  margin-top: 0.5rem;
  color: deeppink;
`;

export const ControlledForm: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [hairColor, setHairColor] = useState('');

  useEffect(() => {
    if (name.length < 2) {
      setError('Name must be more than 2 char');
    }
  }, [name]);

  useEffect(() => {
    if (age <= 0) {
      setError('Must enter valid age');
    }
  }, [age]);

  useEffect(() => {
    if (!hairColor) {
      setError('Hair Color cannot be empty!');
    }
  }, [hairColor]);

  return (
    <>
      <FormContainer>
        {error && <Error>{error}</Error>}
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            name="age"
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="hairColor">Hair Color</Label>
          <Input
            id="hairColor"
            name="hairColor"
            type="text"
            placeholder="Enter your hair color"
            value={hairColor}
            onChange={(e) => setHairColor(e.target.value)}
          />
        </FormGroup>

        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </>
  );
};
