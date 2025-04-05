import { FormEvent, useRef } from 'react';
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
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

export const UncontrolledForm = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const hairColorInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameInputRef.current?.value ?? '';
    const age = ageInputRef.current?.value ?? '';
    const hairColor = hairColorInputRef.current?.value ?? '';

    if (!name || !age || !hairColor) {
      alert('Please fill in all fields');
      return;
    }

    console.log({ name, age: Number(age), hairColor });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" placeholder="Enter your name" ref={nameInputRef} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="age">Age</Label>
        <Input id="age" name="age" type="number" placeholder="Enter your age" ref={ageInputRef} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="hairColor">Hair Color</Label>
        <Input
          id="hairColor"
          name="hairColor"
          type="text"
          placeholder="Enter your hair color"
          ref={hairColorInputRef}
        />
      </FormGroup>

      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
};
